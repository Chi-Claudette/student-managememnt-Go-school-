import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestsService} from "../requests.service";
import {Stud} from "../stud";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vps',
  templateUrl: './vps.component.html',
  styleUrls: ['./vps.component.css']
})
export class VpsComponent implements OnInit {
  studentData: Stud[] = [];
  isLoading= false;

  constructor(private http: HttpClient, private requests: RequestsService, private router: Router) { }

  ngOnInit(): void {
    this.getstd();
  }

  getstd()
  {
    this.isLoading= true;
    this.requests.createGet()
      .subscribe((response) =>
      {
        this.isLoading= false;
        this.studentData = response;
        console.log(this.studentData);
      })
  }

  onAccept(studentD: Stud)
  {
    this.requests.enrolledPost(studentD)
      .subscribe(response =>
      {
        console.log(response);
      });
    alert('Student successfully admitted!')
    return alert;
  }

  onDecline(studentD: Stud)
  {
    this.requests.onDelete(studentD);
    console.log(studentD);
  }


}
