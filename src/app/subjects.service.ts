import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http:HttpClient) { }

  public deleteSubject(id: any) {
    return this.http.put(
      environment.apiUrl + '/subject/delete/'+id,
      {}
    );
  }

  public addSubject(name: any) {
    return this.http.post(
      environment.apiUrl + '/subject/add',
      {
        subject:name
      }
    );
  }


  public getSubjects(){
    return this.http.get(
      environment.apiUrl + '/subject/view'
    );
  }


}
