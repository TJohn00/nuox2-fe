import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers!: any[];
  defaultImage: string = 'default.jpg';
  searchQuery: string = '';

  constructor(private teacherService: TeachersService, private router:Router) {} 

  ngOnInit(): void {
    this.loadTeachers() 
  }

  loadTeachers() {
    this.teacherService.getTeacherAll().subscribe((data: any) => {
      this.teachers = data;
    });

  }
  onSearchChange() {
    this.teacherService.getTeacherAllBySearch(this.searchQuery).subscribe((data: any) => {
      this.teachers = data;
    });
  }
  openTeacherProfile(teacherId: number) {
    this.router.navigate(['/teacher-profile', teacherId]);
  }

  getImageUrl(profilePicture: string): string {
    return `${environment.pfpUrl}/${profilePicture}`;
  }
  setDefaultImage() {
    console.log(`${environment.pfpUrl}/${this.defaultImage}`)
    return `${environment.pfpUrl}/${this.defaultImage}`;
  }

  handleImageError(event: any) {
    event.target.src = this.setDefaultImage();
  }
  

}
