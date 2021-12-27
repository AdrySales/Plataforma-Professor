import { Component, OnInit } from '@angular/core';
import {EstadoDoRadService} from '../services/estado-do-rad.service';
import {UsuarioService} from '../services/usuario.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-correcao-rad-direcao-de-ensino',
  templateUrl: './correcao-rad-direcao-de-ensino.component.html',
  styleUrls: ['./correcao-rad-direcao-de-ensino.component.css']
})
export class CorrecaoRadDirecaoDeEnsinoComponent implements OnInit {
  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
 
  constructor(public estadoDoRad:EstadoDoRadService,public usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
   this.estadoDoRad.getEstadoDoRad().subscribe(estados =>{  
    this.ArrayEstados=estados;
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
