import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public service:AuthService, public router:Router) { }

  ngOnInit(): void {
  }

  logoutUser(){

    this.router.navigate(['/']);
    localStorage.removeItem('token');
   }

}
