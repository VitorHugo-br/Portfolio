import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAction } from '../../Models/card-action';


@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() coverImage?: string | null;
  @Input() content?: string | null;
  @Input() badges?: string[] | null;
  @Input() actions?: CardAction[];

  @Output() actionClicked = new EventEmitter<string>();

  onActionClick(code: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.actionClicked.emit(code);
  }
}
