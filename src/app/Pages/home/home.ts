import { Component, signal } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-home',
  imports: [
    NgxTypewriterComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public words: string[] = ['Build', 'Create', 'Develop', 'Innovate', 'Work']

}
