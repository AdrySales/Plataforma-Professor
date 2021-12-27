import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
import {EstadoDoRadService} from '../services/estado-do-rad.service'
import {EstadoDoPitService} from '../services/estado-do-pit.service'
@Component({
  selector: 'app-tela-selecao-do-pit-para-rad',
  templateUrl: './tela-selecao-do-pit-para-rad.component.html',
  styleUrls: ['./tela-selecao-do-pit-para-rad.component.css']
})
export class TelaSelecaoDoPitParaRadComponent implements OnInit {
  periodoNaoExistente
  email=this.usuarioService.email;
  
  ArrayEstados=[];
  ArrayEstadosPit=[]
    constructor(public estadoDoPitService:EstadoDoPitService,public estadoDoRadService:EstadoDoRadService,public router:Router,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }
  
    ngOnInit(): void {

      this.estadoDoRadService.getEstadoDoRad().subscribe(estado =>{
        this.ArrayEstados=estado;
      });
      this.estadoDoPitService.getEstadoDoPit().subscribe(estado =>{
        this.ArrayEstadosPit=estado;
      });

    }

  
    irParaRad(email,ano,periodo){
  this.periodoService.ano=ano;
  this.periodoService.periodoPeriodo=periodo

  this.estadoDoRadService.emailParaCorrecao=email;
    this.estadoDoRadService.periodoParaCorrecao=periodo;
    this.estadoDoRadService.anoParaCorrecao=ano;
    for(var cont=0;cont<=this.ArrayEstados.length;cont++){
      if(this.ArrayEstados[cont].emailProfessor==email && this.ArrayEstados[cont].periodo==periodo && this.ArrayEstados[cont].ano==ano){
        this.estadoDoRadService.estadoDoRadParaCorrecao=this.ArrayEstados[cont];
        break;
      }
   }
   this.router.navigate([ '/telaRad']);
    }

    pegarEstado(estado){
   
      if(estado.aprovadoDirecaoDeEnsino==true && estado.aprovadoGeral==true && 
        estado.aprovadoExtensao==true && estado.aprovadoPesquisa==true){
        return true
  
  }else{
    return false
  }
      }
  
     
    }