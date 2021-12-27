import { Component, OnInit } from '@angular/core';
import { ComentariosService} from '../services/comentarios.service';
import {UsuarioService} from '../services/usuario.service'
@Component({
  selector: 'app-comentarios-pit',
  templateUrl: './comentarios-pit.component.html',
  styleUrls: ['./comentarios-pit.component.css']
})
export class ComentariosPitComponent implements OnInit {
  email=this.usuarioService.email;
ArrayComentarios=[];
pit="pit"
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
