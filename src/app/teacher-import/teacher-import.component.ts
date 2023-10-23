import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teacher-import',
  templateUrl: './teacher-import.component.html',
  styleUrls: ['./teacher-import.component.css']
})
export class TeacherImportComponent implements OnInit {
  selectedFile: any; 
  status: string = '';


  constructor(private http: HttpClient, private teacherService:TeachersService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  importCSV(): void {
    if (!this.selectedFile) {
      this.status = 'Please select a CSV file.';
    }
    const formData = new FormData();
    formData.append('csvFile', this.selectedFile, this.selectedFile.name);
    this.teacherService.importCSV(formData).subscribe((response: any) => {
      this.status = response.message;
      console.log(response)
    },
    (error) => {
      this.status = 'An error occurred while importing the CSV file.';
    })
  }
}
