import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../requests.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.requestService.logout();
  }

}
