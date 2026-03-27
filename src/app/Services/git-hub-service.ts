import { Injectable } from '@angular/core';
import { GitRepo } from '../Models/git-repo';
import axios from 'axios';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {

  private apiUrl: string | undefined = environment.API_URL;
  private token: string | undefined = environment.GITHUB_TOKEN;

  async getRepos(): Promise<GitRepo[]> {
    if (!this.apiUrl || !this.token) {
      throw new Error('API URL or Token is not defined');
    }
    
    const { data } = await axios.get(this.apiUrl, {
      headers: {
        Authorization: `token ${this.token}`
      }
    });

    return data.map((repo: any) => ({
      name: repo.name,
      htmlUrl: repo.html_url,
      description: repo.description
    }));
  }

}
