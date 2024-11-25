import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  saveUserInfo(body:any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/users`,body);
  }
  
  getCredsInfo(emailId:string):Observable<any>{
   return this.http.get(`${this.baseUrl}/users?emailId=${emailId}`)
  }

  saveTaskInfo(taskInfo:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/tasks`,taskInfo);
  }

  getAllTodos(userId:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/tasks`,{params:{userId}})
  }

  delteTask(taskId:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/tasks/${taskId}`);
  }
  getTaskInfo(taskId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/tasks/${taskId}`);
  }
  updateTodo(taskId:string,taskInfo:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/tasks/${taskId}`,taskInfo);
  }

}
