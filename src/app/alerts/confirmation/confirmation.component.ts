import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {

  constructor(private dialog: MatDialogRef<ConfirmationComponent>) { }
  cancel(){
     this.dialog.close(false);
  }

  deleteTask(){
    this.dialog.close(true);
  }
}
