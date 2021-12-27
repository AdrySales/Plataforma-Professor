import { Component, OnInit } from '@angular/core';
import {EstadoDoRadService} from '../services/estado-do-rad.service';
import {UsuarioService} from '../services/usuario.service';
import {Router} from '@angular/router';
import {ExtensaoService} from '../services/extensao.service'
@Component({
  selector: 'app-correcao-rad-coordenacao-de-extensao',
  templateUrl: './correcao-rad-coordenacao-de-extensao.component.html',
  styleUrls: ['./correcao-rad-coordenacao-de-extensao.component.css']
})
export class CorrecaoRadCoordenacaoDeExtensaoComponent implements OnInit {

  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
  arrayExtensao=[];
  constructor(public extensaoService:ExtensaoService ,public estadoDoRad:EstadoDoRadService,public usuarioService:UsuarioService, public router:Router) { }
 
  ngOnInit(): void {
   this.estadoDoRad.getEstadoDoRad().subscribe(estados =>{  
    this.ArrayEstados=estados;
  });
  this.extensaoService.getExtensao().subscribe(extensao =>{  
    this.arrayExtensao=extensao;
 
      
  });
 
 
  }
 
  telaCorrecao(email,periodo,ano){
    this.estadoDoRad.emailParaCorrecao=email;
    this.estadoDoRad.periodoParaCorrecao=periodo;
    this.estadoDoRad.anoParaCorrecao=ano;
    for(var cont=0;cont<=this.ArrayEstados.length;cont++){
      if(this.ArrayEstados[cont].emailProfessor==email && this.ArrayEstados[cont].periodo==periodo && this.ArrayEstados[cont].ano==ano){
        this.estadoDoRad.estadoDoRadParaCorrecao=this.ArrayEstados[cont];
        break;
      }
   }
    this.router.navigate([ '/correcaoRad']);
  }

}
