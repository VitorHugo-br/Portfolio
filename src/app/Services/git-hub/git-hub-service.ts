import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitRepo } from '../../Models/git-repo';
import { environment } from '../../../environments/environment.development';
import { firstValueFrom, map } from 'rxjs';
import { Languages } from '../../Models/languages';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {

  private http = inject(HttpClient);

  private apiUrl = "https://api.github.com/users/VitorHugo-br/repos";

  async getRepos(): Promise<GitRepo[]> {

    const request$ = this.http.get<any[]>(this.apiUrl);
    const reposData = await firstValueFrom(request$);

    const reposWithLanguages = await Promise.all(
      reposData.map(async (repo) => {
        const languages = await this.getLanguages(repo.name);
        return {
          name: repo.name,
          htmlUrl: repo.html_url,
          description: repo.description,
          languages: languages,
          thumbnail: `https://raw.githubusercontent.com/VitorHugo-br/${repo.name}/refs/heads/master/thumb.png`
        };
      })
    );

    return reposWithLanguages;
  }

  async getLanguages(repoName: string): Promise<Languages> {

    const languagesUrl = `https://api.github.com/repos/VitorHugo-br/${repoName}/languages`;
    const request$ = this.http.get<Languages>(languagesUrl);

    return await firstValueFrom(request$);
  }
}