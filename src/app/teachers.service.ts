import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  public getTeacherAllBySearch(searchQuery:any) {
    console.log('here')
    return this.http.post(
      environment.apiUrl + '/teacher/viewAll',
      {
        filterBy:searchQuery
      }
      );
  }
  public pfpUpload(selectedFile: any) {
    return this.http.post(environment.apiUrl + '/teacher/upload', selectedFile);
   }

  public getTeacherAll() {
    return this.http.post(
      environment.apiUrl + '/teacher/viewAll',{}
      );
  }
  public importCSV(selectedFile: any) {
   return this.http.post(environment.apiUrl + '/teacher/import', selectedFile);
  }
  constructor(private http:HttpClient) { }
  
  public addTeacher(teacher: any) {
    return this.http.post(
      environment.apiUrl + '/teacher/add',teacher
      );
  }

 
}
