import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUserRegistered(fname,lname,dob,address,email,phone,zip)
  {
    return this.http.post('/api/register.php',{
      fname,lname,dob,address,email,phone,zip
    })
  }

  getUserlist()
  {
    return this.http.get('/api/userlist.php');
  }
}
