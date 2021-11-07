import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../requests.service";
import {Stud} from "../stud";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {
  studentData: Stud[] = [];
  isLoading= false;


  constructor(private requests: RequestsService, private router: Router) { }

  ngOnInit(): void {
    this.getstd();
  }

  getstd()
  {
    this.isLoading= true;
    this.requests.enrolledGet()
      .subscribe((response) =>
      {
        this.isLoading= false;
        this.studentData = response;
        console.log(this.studentData);
      })
  }

  onView(sid: string)
  {
    this.router.navigate(['/mes', sid]);
  }
  onUpdate(student: Stud)
  {}
  onDelete(student: Stud)
  {}



}
