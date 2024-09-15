import { Component } from '@angular/core';

@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list-component.component.html',
  styleUrls: ['./subtask-list-component.component.scss']
})
export class SubtaskListComponentComponent {

  isVisible: boolean[] = [false, false, false, false];
  tasks: string[] = [
    'Send invoice to collections agency',
    'Write an email to them to follow-up',
    'Send paper mail to account',
    'This is my new subtask... I\'m autofocused here when I add a subtask'
  ];

  /**
   * Method is used to toggle the visibility of checkmark
   */
  toggleCheckmark(index: number): void {
    this.isVisible[index] = !this.isVisible[index];
  }

}
