import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-menu-flutuante',
  imports: [],
  templateUrl: './menu-flutuante.html',
  styleUrl: './menu-flutuante.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuFlutuante {
  isVisible = signal(false);

  show(): void {
    this.isVisible.set(true);
  }

  hide(): void {
    this.isVisible.set(false);
  }
}