import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitRepo } from '../Models/git-repo';
import { environment } from '../../environments/environment.development';
import { firstValueFrom, map } from 'rxjs';
import { Languages } from '../Models/languages';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  
  private http = inject(HttpClient);

  private apiUrl = environment.API_URL;
  private token = environment.GITHUB_TOKEN;

  async getRepos(): Promise<GitRepo[]> {
    if (!this.apiUrl || !this.token) {
      throw new Error('API URL or Token is not defined');
    }

    const headers = new HttpHeaders({
      Authorization: `token ${this.token}`,
    });

    const request$ = this.http.get<any[]>(this.apiUrl, { headers });
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
    if (!this.token) {
      throw new Error('Token is not defined');
    }

    const headers = new HttpHeaders({
      Authorization: `token ${this.token}`,
    });

    const languagesUrl = `https://api.github.com/repos/VitorHugo-br/${repoName}/languages`;
    const request$ = this.http.get<Languages>(languagesUrl, { headers });
    
    return await firstValueFrom(request$);
  }
}