import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../../servicios/api/api.service';
import { LoginI  } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario1 : new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required)
  })

  // constructor( private api:ApiService ) { }
  constructor( private api:ApiService, private router:Router ) { }

  errorStatus:boolean = false;
  errorMsj:any = "";

  ngOnInit(): void {
  }

  onLogin(form: LoginI){
    this.api.loginByUser(form)
    .subscribe(data =>{
      //console.log(data);
      let dataResponse:ResponseI = data;
      if( dataResponse.estado == "ok"  ){
      //   console.log(data);
        this.router.navigate(['dashboard']);
      }
      else{
        //console.log("Error de autenticación")
        // this.errorStatus = true;
        // this.errorMsj = "Aqui: ";

      }
    }, 
      error => {
        //console.log("Mensaje", error.error.Message)
        this.errorStatus = true;
        this.errorMsj = error.error.Message;
      }  

    );
    
  }

}
