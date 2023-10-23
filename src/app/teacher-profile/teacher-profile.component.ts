import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
})
export class TeacherProfileComponent implements OnInit {
  teacherId: any;
  teacher: any;
  defaultImage: string = 'default.jpg';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private teacherService:TeachersService,
  ) {
    this.teacherId = +this.route.snapshot.paramMap.get('id')!;
  }

  getImageUrl(profilePicture: string): string {
    return `${environment.pfpUrl}/${profilePicture}`;
  }
  setDefaultImage() {
    this.teacher.profilePicture = this.defaultImage;
  }

  triggerFileInput() {
    const fileInput = document.getElementById('profilePictureInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append('profilePicture', selectedFile);
      formData.append('teacherId',this.teacherId)
      this.teacherService.pfpUpload(formData).subscribe((response: any) => {
        this.ngOnInit()
        console.log(response)
      },
      (error) => {
      })
    }
  }

  ngOnInit(): void {
    this.http.get<any>(environment.apiUrl+'/teacher/view/' + this.teacherId).subscribe((data) => {
      this.teacher = data;
    });
  }
}
