import { Component, OnInit } from '@angular/core';
import { ComentariosService} from '../services/comentarios.service';
import {UsuarioService} from '../services/usuario.service'
@Component({
  selector: 'app-comentarios-rad',
  templateUrl: './comentarios-rad.component.html',
  styleUrls: ['./comentarios-rad.component.css']
})
export class ComentariosRadComponent implements OnInit {
rad="rad"
  email=this.usuarioService.email;
  ArrayComentarios=[];
    constructor(public comentariosService:ComentariosService, public usuarioService:UsuarioService) { }
  
    ngOnInit(): void {
      
      this.comentariosService.getComentario().subscribe(comentarios =>{
        this.ArrayComentarios= comentarios;
      });
    }
    deletarComentario(comentario){
      this.comentariosService.deleteComentario(comentario);
    }

}
