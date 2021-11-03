import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { ListausuariosI } from '../../modelos/listausuarios.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usua:ListausuariosI[ ] = [ ]
  constructor( private api:ApiService, private router:Router ) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data =>{
      this.usua = data;
    });
  }

  editarUsuario(id:any){
    this.router.navigate(['editar', id]);
  }

  nuevoUsuario(){
    this.router.navigate(['nuevo']);
  }

}
