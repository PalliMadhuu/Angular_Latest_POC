import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TodoFormComponent,TodosComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor() {
    // console.log('Constructor called!');
  }

  // ngOnChanges(changes: any): void {
  //   console.log('ngOnChanges called!', changes);
  // }

  
  // ngOnInit(): void {
  //   console.log('ngOnInit called!');
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck called!');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called!');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked called!');
  // }
  
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called!');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked called!');
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy called!');
  // }

  
      
  
  

}
