import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit() {
  }
  
  StoreUser(event)
  {
    event.preventDefault();
    const fname = event.target.querySelector('#fname').value;
    const lname = event.target.querySelector('#lname').value;
    const dob = event.target.querySelector('#dob').value;
    const address = event.target.querySelector('#address').value;
    const email = event.target.querySelector('#email').value;
    const phone = event.target.querySelector('#phone').value;
    const zip = event.target.querySelector('#zip').value;

    if(fname != '' && lname != '' && dob != '' && address != '' && email != '' && phone != '' && zip != '')
    {

      this.auth.getUserRegistered(fname,lname,dob,address,email,phone,zip).subscribe(data => {
        if(data == '1')
        {
          window.alert('User Registered Successfully');
          this.route.navigate(['users']);
        }
        else
        {
          window.alert('Something Went Wrong !');
        }
      });
    }
    else
    {
      window.alert('Please Fill the Madatory Field')
    }


  }


}
