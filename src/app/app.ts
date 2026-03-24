import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuFlutuante } from "./Components/menu-flutuante/menu-flutuante";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuFlutuante],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
