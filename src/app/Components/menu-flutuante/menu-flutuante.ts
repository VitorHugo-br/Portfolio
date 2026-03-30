import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';

@Component({
  selector: 'app-menu-flutuante',
  imports: [],
  templateUrl: './menu-flutuante.html',
  styleUrl: './menu-flutuante.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuFlutuante {
  isVisible = signal(false);

  OnNavigate = output<string>();

  show = () => this.isVisible.set(true);
  hide = () => this.isVisible.set(false);

  navigate(section: string, event: Event): void {
    event.preventDefault();
    this.OnNavigate.emit(section);
  }

}