import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  roomNumber: string = '';
  status:string='';
  constructor(private teacherService: TeachersService) {}

  addTeacher() {
    const newTeacher = {
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.email,
      phone: this.phone,
      roomNumber: this.roomNumber,
    };

    this.teacherService.addTeacher(newTeacher).subscribe((res:any) => {
      this.status = res.message
      console.log(res)
    },
    (error) => {
      console.error('Error adding teacher:', error);
      this.status = 'An error occurred while adding the teacher.';
    });
  }

  ngOnInit(): void {
  }

}
