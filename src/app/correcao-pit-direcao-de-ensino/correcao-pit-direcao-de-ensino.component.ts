import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import {EstadoDoPitService} from '../services/estado-do-pit.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-correcao-pit-direcao-de-ensino',
  templateUrl: './correcao-pit-direcao-de-ensino.component.html',
  styleUrls: ['./correcao-pit-direcao-de-ensino.component.css']
})
export class CorrecaoPitDirecaoDeEnsinoComponent implements OnInit {

  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
 
  constructor(public estadoDoPit:EstadoDoPitService,public usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
   this.estadoDoPit.getEstadoDoPit().subscribe(estados =>{  
    this.ArrayEstados=estados;
  });
 

  }

  telaCorrecao(email,periodo,ano){
    this.estadoDoPit.emailParaCorrecao=email;
    this.estadoDoPit.periodoParaCorrecao=periodo;
    this.estadoDoPit.anoParaCorrecao=ano;
    for(var cont=0;cont<=this.ArrayEstados.length;cont++){
      if(this.ArrayEstados[cont].emailProfessor==email && this.ArrayEstados[cont].periodo==periodo && this.ArrayEstados[cont].ano==ano){
        this.estadoDoPit.estadoDoPitParaCorrecao=this.ArrayEstados[cont];
        break;
      }
   }
    this.router.navigate([ '/correcaoPit']);
  }


}