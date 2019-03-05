import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  user:any=[];


  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit() {

    this.auth.getUserlist().subscribe(data => {
      if(!data)
      {
          window.alert('Something went Wrong!');
          this.route.navigate(['home']);
      }
      else{
        this.user = data;
      }
      
    })


  }

}
