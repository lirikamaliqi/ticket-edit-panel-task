import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttons = [
    { icon: 'assets/icon/icon-details.svg', label: 'Details' },
    { icon: 'assets/icon/icon-activity.svg', label: 'Activity' },
    { icon: 'assets/icon/icon-comments.svg', label: 'Comments' },
    { icon: 'assets/icon/icon-attachments.svg', label: 'Attachments' }
  ];

   // Index of the currently active button, default to the first button
   activeButtonIndex: number = 0;

  /**
    * Determine if a button is active
    */
    isActive(index: number): boolean {
      return this.activeButtonIndex === index;
    }
 

  /**
    * Set the clicked button as active
    */
    selectButton(index: number): void {
     this.activeButtonIndex = index;
    }
 
  /**
    * Determine if the first button is active
    */
    isFirstButtonActive(): boolean {
      return this.activeButtonIndex === 0;
    }

}
