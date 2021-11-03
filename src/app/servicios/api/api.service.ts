import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ListausuariosI } from '../../modelos/listausuarios.interface';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string = "Api/"

  constructor( private http:HttpClient ) { }

  loginByUser(form:LoginI):Observable<ResponseI>{

    let direccion = this.url + 'authenticate';
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllUsers():Observable<ListausuariosI[]>{
    let direccion = this.url + "Usuario";
    return this.http.get<ListausuariosI[]>(direccion);
  }

  getSingleUser(id:any):Observable<UsuarioI>{
    let direccion = this.url + 'Usuario/id=' + id;
    return this.http.get<UsuarioI>(direccion);
  }

}
