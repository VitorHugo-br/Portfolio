import { Component, inject, signal } from '@angular/core';
import { GitHubService } from '../../Services/git-hub-service';
import { GitRepo } from '../../Models/git-repo';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})

export class Projects {
  private gitHubService = inject(GitHubService);
  repos = signal<GitRepo[]>([]);

  ngOnInit(): void {
    this.gitHubService.getRepos().then((repos) => {
      this.repos.set(repos);
    });
  }
}
