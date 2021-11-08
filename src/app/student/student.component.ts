import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Stud} from "../stud";
import {HttpClient} from "@angular/common/http";
import {RequestsService} from "../requests.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  genders= ['Male', 'Female'];
  studentR= new FormGroup({});

  constructor(private http: HttpClient,
              private requests: RequestsService) {

  }

  ngOnInit(): void {
       this.studentR= new FormGroup(
      {
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl(null, Validators.required),
        'inst': new FormControl(null, Validators.required),
        'faculty': new FormControl(null, Validators.required),
        'dept': new FormControl(null, Validators.required),
        'level': new FormControl(null, Validators.required),
        'cv': new FormControl(null, Validators.required),

      }
    )

  }

  get f()
  {
    return this.studentR.controls;
  }

  onSubmit(studInfo: Stud)
  {
    this.requests.createPost(studInfo)
      .subscribe(response =>
      {
        console.log(response);
        alert('Your form has been successfully submitted');
        window.location.reload();
      }, error =>
      {
        alert(error.error.message);
        window.location.reload();
      });

  }

}
