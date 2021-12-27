import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../services/usuario.service';
import {EstadoDoRadService} from '../services/estado-do-rad.service';
import {AtividadesService} from '../services/atividades.service';


import {Comentario} from '../modelos/comentario';
import {ComentariosService} from '../services/comentarios.service';
import { Router } from '@angular/router';


import {ComentariosRadService} from '../services/comentarios-rad.service';
import { Aulas } from '../modelos/aulas';
import { AulasService } from '../services/aulas.service';

import { ApoioAoEnsino } from '../modelos/apoioAoEnsino';
import { ApoioAoEnsinoService } from '../services/apoio-ao-ensino.service';

import { Pesquisa } from '../modelos/pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

import { Extensao } from '../modelos/extensao';
import { ExtensaoService } from '../services/extensao.service';

import { Administrativo } from '../modelos/administrativo';
import { AdministrativoService } from '../services/administrativo.service';
import{PeriodoService} from '../services/periodo.service'

@Component({
  selector: 'app-correcao-rad',
  templateUrl: './correcao-rad.component.html',
  styleUrls: ['./correcao-rad.component.css']
})
export class CorrecaoRadComponent implements OnInit {
  usuarioTipo=this.usuarioService.users;
  email=this.estadoDoRadService.emailParaCorrecao;
estado=this.estadoDoRadService.estadoDoRadParaCorrecao;
 
periodo=this.periodoService.periodoPeriodo;
ano=this.periodoService.ano;

arrayExtensaoTrue=[]
arrayPesquisaTrue=[]

anoAulas=this.periodoService.ano;
anoApoioAoEnsino=this.periodoService.ano;
anoPesquisa=this.periodoService.ano;
anoExtensao=this.periodoService.ano;
anoAdministrativo=this.periodoService.ano;

periodoAulas=this.periodoService.periodoPeriodo;
periodoApoioAoEnsino=this.periodoService.periodoPeriodo;
periodoPesquisa=this.periodoService.periodoPeriodo;
periodoExtensao=this.periodoService.periodoPeriodo;
periodoAdministrativo=this.periodoService.periodoPeriodo;

arrayComentariosRad=[];
periodoDoComentarioDoRad=this.periodoService.ano+"/"+this.periodoService.periodoPeriodo;

editState:boolean =false;
ArrayAulas=[];
aulaToEdit: Aulas;
chTotalDeAulas=0;
chTotalDePreparacaoDeAulas=0;

ArrayApoioAoEnsino=[];
apoioAoEnsinoToEdit: ApoioAoEnsino;
chTotalDeApoioAoEnsino=0;

ArrayPesquisa=[];
pesquisaToEdit: Pesquisa;
chTotalDePesquisa=0;
 
ArrayExtensao=[];
extensaoToEdit: Extensao;
chTotalDeExtensao=0;

ArrayAdministrativo=[];
administrativoToEdit: Administrativo;
chTotalDeAdministrativo=0;

chTotal=0;


  comentario:Comentario={
    comentario:'',
    emailProfessor:this.email,
    ano:this.periodoService.ano,
    periodo:this.periodoService.periodoPeriodo,
    documento:''
  }

  constructor(public comentariosRadService:ComentariosRadService ,public periodoService:PeriodoService,public comentariosService:ComentariosService,public estadoDoRadService:EstadoDoRadService,
    public  usuarioService : UsuarioService,public router:Router,public atividadesService:AtividadesService,
    public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, public administrativoService:AdministrativoService) { }

  ngOnInit(): void {
  console.log(this.email)
    this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoioAoEnsino =>{
      this.ArrayApoioAoEnsino=apoioAoEnsino;
  
      for(var cont=0;cont<=this.ArrayApoioAoEnsino.length;cont++){
        if(this.ArrayApoioAoEnsino[cont].emailProfessor==this.email && this.ArrayApoioAoEnsino[cont].ano==this.ano && this.ArrayApoioAoEnsino[cont].periodo==this.periodo){
        this.chTotalDeApoioAoEnsino=this.chTotalDeApoioAoEnsino + parseInt(this.ArrayApoioAoEnsino[cont].chSemanal);
        this.chTotal=this.chTotal+ parseInt(this.ArrayApoioAoEnsino[cont].chSemanal);
        }
        }
         
         
    });
  
    this.aulasService.getAulas().subscribe(aulas =>{
      this.ArrayAulas=aulas;
      for(var cont=0;cont<=this.ArrayAulas.length;cont++){
        if(this.ArrayAulas[cont].emailProfessor==this.email && this.ArrayAulas[cont].ano==this.ano && this.ArrayAulas[cont].periodo==this.periodo){
        this.chTotalDeAulas=this.chTotalDeAulas + parseInt(this.ArrayAulas[cont].chSemanal);
        this.chTotalDePreparacaoDeAulas=this.chTotalDePreparacaoDeAulas + parseInt(this.ArrayAulas[cont].chDePreparacao);
        this.chTotal=this.chTotal+parseInt(this.ArrayAulas[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayAulas[cont].chDePreparacao);
      }
        }
       
    });
  
  
    
  
    this.pesquisaService.getPesquisa().subscribe(pesquisa =>{
      this.ArrayPesquisa= pesquisa;
      for(var cont=0;cont<=this.ArrayPesquisa.length;cont++){
        if(this.ArrayPesquisa[cont].emailProfessor==this.email && this.ArrayPesquisa[cont].ano==this.ano && this.ArrayPesquisa[cont].periodo==this.periodo){
        this.chTotalDePesquisa=this.chTotalDePesquisa + parseInt(this.ArrayPesquisa[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayPesquisa[cont].chSemanal);
        this.arrayPesquisaTrue[cont]=this.ArrayPesquisa[cont];
      }
        }
    });
  
    this.extensaoService.getExtensao().subscribe(extensao =>{
      this.ArrayExtensao= extensao;
      for(var cont=0;cont<=this.ArrayExtensao.length;cont++){
        if(this.ArrayExtensao[cont].emailProfessor==this.email && this.ArrayExtensao[cont].ano==this.ano && this.ArrayExtensao[cont].periodo==this.periodo){
        this.chTotalDeExtensao=this.chTotalDeExtensao + parseInt(this.ArrayExtensao[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayExtensao[cont].chSemanal);
        this.arrayExtensaoTrue[cont]=this.ArrayExtensao[cont];
      }
        }
    });
  
    this.administrativoService.getAdministrativo().subscribe(administrativo =>{
      this.ArrayAdministrativo= administrativo;
      for(var cont=0;cont<=this.ArrayAdministrativo.length;cont++){
        if(this.ArrayAdministrativo[cont].emailProfessor==this.email && this.ArrayAdministrativo[cont].ano==this.ano && this.ArrayAdministrativo[cont].periodo==this.periodo){
        this.chTotalDeAdministrativo=this.chTotalDeAdministrativo + parseInt(this.ArrayAdministrativo[cont].chSemanal);
        this.chTotal=this.chTotal+ parseInt(this.ArrayAdministrativo[cont].chSemanal);
      }
        }
        
    });
  
  
  
  this.chTotal=this.chTotalDeAdministrativo+this.chTotalDeApoioAoEnsino+this.chTotalDeAulas+this.chTotalDeExtensao+this.chTotalDePesquisa+this.chTotalDePreparacaoDeAulas;
  



  this.comentariosRadService.getComentarioRad().subscribe(comentarios =>{
    this.arrayComentariosRad=comentarios;
       
       
  });

  }
  enviarCorrecaoParaProfessor(){
    this.comentario.documento="rad"
    this.comentario.ano=this.periodoService.ano;
    this.comentario.periodo=this.periodoService.periodoPeriodo;
    this.comentariosService.addComentario(this.comentario);
  
  }


 


  reenviarParaAlteracao(){
    console.log("reprovar")
    this.estadoDoRadService.deleteEstadoDoRad(this.estado)
  
    if(this.usuarioTipo==3){
      this.estado.enviado=false;
      this.estado.aprovadoGeral=false;
      this.router.navigate([ '/listagemDeRad']);
    }if(this.usuarioTipo==4){
      this.estado.enviado=false;
      this.estado.aprovadoDirecaoDeEnsino=false;
      this.estado.aprovadoGeral=false;
      if(this.arrayExtensaoTrue.length==0){
        this.estado.aprovadoExtensao=false;
      }if(this.arrayPesquisaTrue.length==0){
        this.estado.aprovadoPesquisa=false
      }

      this.router.navigate([ '/CorrecaoRadDirecaoDeEnsino']);
    }if(this.usuarioTipo==5){
      this.estado.enviado=false;
      this.estado.aprovadoExtensao=false;
      this.estado.aprovadoPesquisa=false;
      this.estado.aprovadoDirecaoDeEnsino=false;
      this.estado.aprovadoGeral=false;
      this.router.navigate([ '/CorrecaoRadCoordenacaoDePesquisa']);
    }if(this.usuarioTipo==6){
      this.estado.enviado=false;
      this.estado.aprovadoExtensao=false;
      this.estado.aprovadoPesquisa=false;
      this.estado.aprovadoDirecaoDeEnsino=false;
      this.estado.aprovadoGeral=false;
      this.router.navigate([ '/CorrecaoRadCoordenacaoDeExtensao']);
    }

    this.estadoDoRadService.addEstadoDoRad(this.estado);

  

   
  }
  aprovar(){
console.log("aprovar")
this.estadoDoRadService.deleteEstadoDoRad(this.estado)
if(this.usuarioTipo==3){
  this.estado.enviado=false;
  this.estado.aprovadoGeral=true;
  this.router.navigate([ '/listagemDeRad']);
}if(this.usuarioTipo==4){
  this.estado.enviado=false;
  this.estado.aprovadoDirecaoDeEnsino=true;
//////////////////////////////////////////////////////
console.log(this.arrayExtensaoTrue.length)
  if(this.arrayExtensaoTrue.length<=0){
  
    this.estado.aprovadoExtensao=true;
  }if(this.arrayPesquisaTrue.length<=0){
 
    this.estado.aprovadoPesquisa=true
  }
///////////////////////////////////////////////

  this.router.navigate([ '/CorrecaoRadDirecaoDeEnsino']);
}if(this.usuarioTipo==5){
  this.estado.enviado=false;
  this.estado.aprovadoPesquisa=true;
  this.router.navigate([ '/CorrecaoRadCoordenacaoDePesquisa']);
}if(this.usuarioTipo==6){
  this.estado.enviado=false;
  this.estado.aprovadoExtensao=true;
  this.router.navigate([ '/CorrecaoRadCoordenacaoDeExtensao']);
}

    this.estadoDoRadService.addEstadoDoRad(this.estado);

 
}

}
