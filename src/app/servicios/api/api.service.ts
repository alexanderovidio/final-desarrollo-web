import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string = "http://192.168.0.25:45497/Api/authenticate"

  constructor( private http:HttpClient ) { }

  loginByUser(form:LoginI):Observable<ResponseI>{

    // let direccion = this.url;
    return this.http.post<ResponseI>("http://192.168.0.25:45497/Api/authenticate", form);
  }

}
