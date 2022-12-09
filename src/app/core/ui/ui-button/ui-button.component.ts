import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {
  @Input() text = '';
  @Output() UIButtonEvent = new EventEmitter<MouseEvent>();

  onClickEmit(e: MouseEvent) {
    this.UIButtonEvent.emit(e);
  }
}
