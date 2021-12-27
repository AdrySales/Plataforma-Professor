import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
import {EstadoDoPitService} from '../services/estado-do-pit.service'
import { EstadoDoPit } from '../modelos/estadoDoPit';
import {EstadoDoRadService} from '../services/estado-do-rad.service'
@Component({
  selector: 'app-tela-documentos-aprovados',
  templateUrl: './tela-documentos-aprovados.component.html',
  styleUrls: ['./tela-documentos-aprovados.component.css']
})
export class TelaDocumentosAprovadosComponent implements OnInit {

  
 email=this.usuarioService.email;
 ArrayPitsAprovados=[];
 ArrayPits=[];
 ArrayRads=[];
   constructor(public estadoDoRadService:EstadoDoRadService,public estadoDoPitService:EstadoDoPitService,public router:Router,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }
 
   ngOnInit(): void {
   

     this.estadoDoPitService.getEstadoDoPit().subscribe(estado =>{
       this.ArrayPits=estado;
     });

     this.estadoDoRadService.getEstadoDoRad().subscribe(estado =>{
      this.ArrayRads=estado;
    });
    
   }

   irParaPit(ano,periodo){
 this.periodoService.ano=ano;
 this.periodoService.periodoPeriodo=periodo
 this.router.navigate([ '/ListagemPitAprovado']);
 
   }

   pegarEstadoPit(periodo){

    if(periodo.aprovadoDirecaoDeEnsino==true && periodo.aprovadoGeral==true && 
      periodo.aprovadoExtensao==true && periodo.aprovadoPesquisa==true){
          return true
        }else{
          return false
        }

  
}
  pegarEstadoRad(periodo){
    
    if(periodo.aprovadoDirecaoDeEnsino==true && periodo.aprovadoGeral==true && 
      periodo.aprovadoExtensao==true && periodo.aprovadoPesquisa==true){
          return true
        }else{
          return false

}
   
}


irParaRad(ano,periodo){
  this.periodoService.ano=ano;
  this.periodoService.periodoPeriodo=periodo;
  this.router.navigate([ '/ListagemRadAprovado']);
  
    }
}
   