import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects!: any[]; 
  displayedColumns: string[] = ['name', 'delete']; 
  subjectName:string = '';

  
  constructor(private subjectService: SubjectsService) {} 

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((data: any) => {
      this.subjects = data;
    });
  }

  deleteSubject(subject: any): void {
    this.subjectService.deleteSubject(subject.id).subscribe( () => {
      this.ngOnInit()
    });
  }

  addSubject(): void {
    this.subjectService.addSubject(this.subjectName).subscribe(() => {
      this.ngOnInit()
    });
  }

}
