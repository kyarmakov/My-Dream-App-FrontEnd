import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {
  @Input() text = '';
  @Output() UIButtonEvent = new EventEmitter<string>();

  onClickEmit() {
    // console.log("X: ", e.clientX, ", Y: ", e.clientY);
    this.UIButtonEvent.emit('click');
  }
}
