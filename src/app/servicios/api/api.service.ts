import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ListausuariosI } from '../../modelos/listausuarios.interface';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { FacturaI } from '../../modelos/factura.interface';
import { ListafacturasI } from '../../modelos/listafacturas.interface';
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

  getAllInvoices():Observable<ListafacturasI[]>{
    let direccion = this.url + "Factura";
    return this.http.get<ListafacturasI[]>(direccion);
  }

  getSingleInvoice(id:any):Observable<FacturaI>{
    let direccion = this.url + 'Factura/' + id;
    return this.http.get<FacturaI>(direccion);
  }

  putInvoice(form:FacturaI):Observable<ResponseI>{
    let direccion = this.url + 'Factura/' + form.id_factura;
    return this.http.put<ResponseI>(direccion, form);
  }

  deleteInvoice(form:FacturaI):Observable<ResponseI>{
    let direccion = this.url + 'Factura/' + form.id_factura;
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseI>(direccion, Options);
  }

  postInvoice(form:FacturaI):Observable<ResponseI>{
    let direccion = this.url + 'Factura/';
    return this.http.post <ResponseI>(direccion, form);
  }

}
