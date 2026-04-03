import { Component, inject, signal } from '@angular/core';
import { GitHubService } from '../../Services/git-hub/git-hub-service';
import { GitRepo } from '../../Models/git-repo';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cards } from '../../Components/cards/cards';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    Cards
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  private gitHubService = inject(GitHubService);
  repos = signal<GitRepo[]>([]);
  activeIndex = signal<number>(0);

  ngOnInit(): void {
    this.gitHubService.getRepos().then((repos) => {
      this.repos.set(repos.filter((repo) => repo.description !== null));
    });
  }

  next() {
    if (this.repos().length === 0) return;
    this.activeIndex.update(i => (i + 1) % this.repos().length);
  }

  previous() {
    if (this.repos().length === 0) return;
    this.activeIndex.update(i => (i - 1 + this.repos().length) % this.repos().length);
  }

  getCardStyle(index: number): Record<string, string | number> {
    const total = this.repos().length;
    if (total === 0) return {};

    let diff = index - this.activeIndex();

    // Loop infinito: encontra a menor distância
    const half = Math.floor(total / 2);
    if (diff > half) {
      diff -= total;
    } else if (diff < -half) {
      diff += total;
    }

    // Configuração de distâncias e escalas (Coverflow)
    const translateX = diff * 320; // pixels de deslocamento horizontal a partir do centro
    const scale = diff === 0 ? 1.05 : 0.85; // Card do centro é maior
    const opacity = diff === 0 ? 1 : (Math.abs(diff) === 1 ? 0.6 : 0); // Cartas laterais com 60% de opacidade
    const visibility = Math.abs(diff) <= 1 ? 'visible' : 'hidden'; // Esconder os muito distantes
    const zIndex = 50 - Math.abs(diff); // Card center fica por cima

    return {
      transform: `translate(calc(-50% + ${translateX}px), -50%) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      visibility: visibility as string,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
    };
  }

  getLanguageKeys(languages: any): string[] {
    if (!languages) return [];
    return Object.keys(languages);
  }

  handleCardAction(actionCode: string, url: string) {
    if (actionCode === 'open_repo') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

}
