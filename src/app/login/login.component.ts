import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';

  constructor(private http: HttpClient) { }

  storeData() {
    const userData = {
      cname: this.username,
      email: this.email,
      pwd: this.password,
      mno: this.phoneNumber
    };

    const apiUrl = 'http://localhost:8080/addcustomer'; 

    this.http.post(apiUrl, userData)
      .subscribe(
        (response: any) => {
          console.log('Registration successful:', response);
          alert('Registration Successfull')
  
        },
        (error: any) => {
          console.error('Error occurred:', error);

        }
      );
  }
}