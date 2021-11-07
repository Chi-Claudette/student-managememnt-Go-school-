import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminL= new FormGroup({});
  Aname= 'admin';
  Apass= '1234';

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.adminL= new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        pass: new FormControl(null, Validators.required)
      }
    )
  }
  get f()
  {
    return this.adminL.controls;
  }
  onSubmit()
  {
    if (this.f.name.value === this.Aname && this.f.pass.value === this.Apass)
    {
      this.router.navigate(['/']);
    }
    else{
      alert('Your credentials are invalid!. Try again');
      this.adminL.reset();
    }
  }

}
