import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioI} from '../../modelos/usuario.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let pacienteid = this.activerouter.snapshot.paramMap.get('id');
    console.log(pacienteid);
    this.api.getSingleUser(pacienteid).subscribe(data =>{
      console.log(data);
    })
  }

}
