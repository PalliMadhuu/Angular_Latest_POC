import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToasterServiceService } from '../../services/toaster-service.service';
import { ConfirmationComponent } from '../../alerts/confirmation/confirmation.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, MatSnackBarModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  constructor(
    private apiService: ApiServiceService,
    private dialog: MatDialog,
    private toasterService: ToasterServiceService,
  ) {}

  tasks: any;

  ngOnInit() {
    const authToken=localStorage.getItem('authToken') ?? null;
    if(authToken){
    this.getTodos();
    }
  }
  getTodos() {
    const userId=localStorage.getItem('authToken') ?? '0';
    this.apiService.getAllTodos(userId).subscribe((response: any) => {
      try {
        this.tasks = response;
      } catch (error: any) {
        console.error(error);
      }
    });
  }
  onAddTask() {
    const dialogRef = this.dialog.open(TodoFormComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getTodos();
    });
  }

  onEditTask(taskId: string) {
    this.apiService.getTaskInfo(taskId).subscribe((response) => {
      const dialogRef = this.dialog.open(TodoFormComponent, { data: response });
      dialogRef.afterClosed().subscribe(() => {
        this.getTodos();
      });
    });
  }
  onDeleteTask(taskId: string) {
   const confirmationRef= this.dialog.open(ConfirmationComponent);
   confirmationRef.afterClosed().subscribe((response:boolean)=>{
    if(response){
          this.apiService.delteTask(taskId).subscribe((response: any) => {
      try {
        console.log(response);
        if (response.id) {
          this.getTodos();
          this.toasterService.successToastMessage('Task Deleted Successfully');
        }
      } catch (err: any) {
        this.toasterService.showErrorMessage();

        console.error(err);
      }
    });
    }
   })

  }

}
