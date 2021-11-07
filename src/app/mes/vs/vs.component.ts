import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../../requests.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Stud} from "../../stud";

@Component({
  selector: 'app-vs',
  templateUrl: './vs.component.html',
  styleUrls: ['./vs.component.css']
})
export class VsComponent implements OnInit {
  id:string='';
  student:any;

  constructor(private requests: RequestsService,  private router:Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.requests.getStud(this.id).subscribe((data)=>{
      this.student=data;
      console.log(this.student);
    });
  }

}
