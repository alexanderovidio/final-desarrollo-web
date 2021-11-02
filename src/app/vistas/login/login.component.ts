import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../../servicios/api/api.service';
import { LoginI  } from '../../modelos/login.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  // constructor( private api:ApiService ) { }
  constructor( private api:ApiService ) { }
  ngOnInit(): void {
  }

  onLogin(form: LoginI){
    this.api.loginByUser(form).subscribe(data =>{
      console.log(data);
    })
  }

}
