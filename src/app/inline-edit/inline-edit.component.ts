import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent {

  fields = [
    { label: 'Assignee', icon: 'assets/icon/icon-assignee.svg', value: 'Brian Griffin', isEditing: false, placeholder: 'Enter assignee' },
    { label: 'Co-owner', icon: 'assets/icon/icon-coowner.svg', value: 'Peter Griffin', isEditing: false, placeholder: 'Enter co-owner' },
    { label: 'Importance', icon: 'assets/icon/icon-importance.svg', value: 'Very urgent', isEditing: false, placeholder: 'Enter importance' },
    { label: 'Customer name', icon: 'assets/icon/icon-customername.svg', value: 'Enter name', isEditing: false, placeholder: 'Enter customer name' },
    { label: 'Invoice ID', icon: 'assets/icon/icon-invoiceid.svg', value: '19823190', isEditing: false, placeholder: 'Enter invoice ID' },
  ];

  /**
   * Start editing specific field
   */
  startEdit(field: any): void {
    this.fields.forEach(f => f.isEditing = false);
    field.isEditing = true;
  }

  /**
   * Stop editing specific field
   */
  stopEdit(field: any): void {
    field.isEditing = false;
  }

}
