import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-paragraph',
 // templateUrl: './toggle-paragraph.component.html',

 template: `
    <button (click)="toggleParagraph()">Toggle Paragraph</button>
    <p *ngIf="isParagraphVisible">This is a hidden paragraph.</p>
  `,
  styleUrls: ['./toggle-paragraph.component.scss']
})
export class ToggleParagraphComponent {
  isParagraphVisible = false;

  toggleParagraph() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
