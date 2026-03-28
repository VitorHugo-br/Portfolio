import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardAction {
  label: string;
  emitCode: string;
  icon?: string;
}

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
    event.preventDefault(); // prevent default anchor click behavior if wrapped in <a>
    event.stopPropagation();
    this.actionClicked.emit(code);
  }
}
