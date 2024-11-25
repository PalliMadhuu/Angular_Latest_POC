import { Component, Inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { nameWithoutSpecialChar } from '../../validators/custom-validators';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../services/api-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToasterServiceService } from '../../services/toaster-service.service';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  todoForm: FormGroup;
  isTaskUpdate: boolean = false;

  constructor(
    private toasterService:ToasterServiceService,
    private formBuilder: FormBuilder,
    private apiSerivice: ApiServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskDialogRef: MatDialogRef<TodoFormComponent>
  ) {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required, nameWithoutSpecialChar()]],
      description: ['', [Validators.required, nameWithoutSpecialChar()]],
    });
  }

  ngOnInit() {
    if (this.data) {
      this.todoForm.patchValue(this.data);
      this.isTaskUpdate = true;
    }
  }

  onTodoFormSubmit() {
    if (this.todoForm.valid) {
      if (this.isTaskUpdate) {
        this.apiSerivice.updateTodo(this.data.id,this.todoForm.value).subscribe((res:any) => {
          try{
            this.toasterService.successToastMessage('Task Updated Successfully');
             this.taskDialogRef.close();
          }
          catch(error:any){
            console.error(error);
            this.toasterService.showErrorMessage();
          }
        })
      } else {
        this.apiSerivice
          .saveTaskInfo({...this.todoForm.value,userId:localStorage.getItem('authToken')})
          .subscribe((response: any) => {
            try {
              this.toasterService.successToastMessage('Task Added Successfully');
              this.taskDialogRef.close();
            } catch (err: any) {
              console.log(err);
              this.toasterService.showErrorMessage();
            }
          });
      }
    }
  }
  onClose(){
    this.taskDialogRef.close(false);
  }
}
