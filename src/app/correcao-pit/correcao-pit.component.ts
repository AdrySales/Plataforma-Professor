import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../services/usuario.service';
import {EstadoDoPitService} from '../services/estado-do-pit.service';
import {AtividadesService} from '../services/atividades.service';


import {Comentario} from '../modelos/comentario';
import {ComentariosService} from '../services/comentarios.service';
import { Router } from '@angular/router';

import{EstadoDoRadService} from '../services/estado-do-rad.service';
import {EstadoDoRad} from '../modelos/estadoDoRad'

import { Aulas } from '../modelos/aulas';
import { AulasService } from '../services/aulas.service';

import { ApoioAoEnsino } from '../modelos/apoioAoEnsino';
import { ApoioAoEnsinoService } from '../services/apoio-ao-ensino.service';

import { Pesquisa } from '../modelos/pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

import { Extensao } from '../modelos/extensao';
import { ExtensaoService } from '../services/extensao.service';
import{PeriodoService} from '../services/periodo.service'
import { Administrativo } from '../modelos/administrativo';
import { AdministrativoService } from '../services/administrativo.service';

@Component({
  selector: 'app-correcao-pit',
  templateUrl: './correcao-pit.component.html',
  styleUrls: ['./correcao-pit.component.css']
})
export class CorrecaoPitComponent implements OnInit {
email=this.estadoDoPitService.emailParaCorrecao;
estado=this.estadoDoPitService.estadoDoPitParaCorrecao;
 
usuarioTipo=this.usuarioService.users;


arrayExtensaoTrue=[]
arrayPesquisaTrue=[]


estadoDoRad:EstadoDoRad={
  enviado:false,
  emailProfessor:this.email,
  periodo:'',
  ano:'',
  aprovadoGeral:false,
    aprovadoDirecaoDeEnsino:false,
    aprovadoExtensao:false,
    aprovadoPesquisa:false

}


periodo=this.periodoService.periodoPeriodo;
ano=this.periodoService.ano;

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

  constructor(public estadoRadService:EstadoDoRadService,public periodoService:PeriodoService,public comentariosService:ComentariosService,public estadoDoPitService:EstadoDoPitService,
    public  usuarioService : UsuarioService,public router:Router,public atividadesService:AtividadesService,
    public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, public administrativoService:AdministrativoService) { }

  ngOnInit(): void {
  
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
      console.log(this.ArrayPesquisa)
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
  
  }


  enviarCorrecaoParaProfessor(){
     console.log("comentar")
    this.comentario.documento='pit'
    this.comentario.ano=this.periodoService.ano;
    this.comentario.periodo=this.periodoService.periodoPeriodo;
    this.comentariosService.addComentario(this.comentario);

   
  }

  valor;
  enviarValor(valor){
    this.valor=valor;
  }
 
  reenviarParaAlteracao(){
    console.log("reprovar")
    this.estadoDoPitService.deleteEstadoDoPit(this.estado)
  
    if(this.usuarioTipo==3){
      this.estado.enviado=false;
      this.estado.aprovadoGeral=false;
      this.router.navigate([ '/listagemDePit']);
    }if(this.usuarioTipo==4){
      this.estado.enviado=false;
      this.estado.aprovadoDirecaoDeEnsino=false;
      this.estado.aprovadoGeral=false;
      if(this.arrayExtensaoTrue.length==0){
        this.estado.aprovadoExtensao=false;
      }if(this.arrayPesquisaTrue.length==0){
        this.estado.aprovadoPesquisa=false
      }

      this.router.navigate([ '/CorrecaoPitDirecaoDeEnsino']);
    }if(this.usuarioTipo==5){
      this.estado.enviado=false;
      this.estado.aprovadoPesquisa=false;
      this.estado.aprovadoDirecaoDeEnsino=false;
      this.estado.aprovadoGeral=false;
      this.router.navigate([ '/CorrecaoPitCoordenacaoDePesquisa']);
    }if(this.usuarioTipo==6){
      this.estado.enviado=false;
      this.estado.aprovadoExtensao=false;
      this.estado.aprovadoPesquisa=false;
      this.estado.aprovadoDirecaoDeEnsino=false;
      this.estado.aprovadoGeral=false;
      this.router.navigate([ '/CorrecaoPitCoordenacaoDeExtensao']);
    }

    this.estadoDoPitService.addEstadoDoPit(this.estado);

  

   
  }
  aprovar(){
console.log("aprovar")
this.estadoDoPitService.deleteEstadoDoPit(this.estado)
if(this.usuarioTipo==3){
  this.estado.enviado=false;
  this.estado.aprovadoGeral=true;
  this.router.navigate([ '/listagemDePit']);
}if(this.usuarioTipo==4){
  this.estado.enviado=false;
  this.estado.aprovadoDirecaoDeEnsino=true;
//////////////////////////////////////////////////////
console.log(this.arrayExtensaoTrue.length)
  if(this.arrayExtensaoTrue.length<=0){
  
    this.estado.aprovadoExtensao=true;
  }if(this.arrayPesquisaTrue.length<=0){
 
    this.estado.aprovadoPesquisa=true
  }if(this.arrayPesquisaTrue.length<=0 && this.arrayExtensaoTrue.length<=0){
    this.estadoDoRad.ano=this.periodoService.ano
  this.estadoDoRad.periodo=this.periodoService.periodoPeriodo
  this.estadoRadService.addEstadoDoRad(this.estadoDoRad);
  }
///////////////////////////////////////////////

  this.router.navigate([ '/CorrecaoPitDirecaoDeEnsino']);
}if(this.usuarioTipo==5){
  this.estado.enviado=false;
  this.estado.aprovadoPesquisa=true;
  if( this.arrayExtensaoTrue.length<=0){
    this.estadoDoRad.ano=this.periodoService.ano
  this.estadoDoRad.periodo=this.periodoService.periodoPeriodo
  this.estadoRadService.addEstadoDoRad(this.estadoDoRad);
  }
  this.router.navigate([ '/CorrecaoPitCoordenacaoDePesquisa']);
}if(this.usuarioTipo==6){
  this.estado.enviado=false;
  this.estado.aprovadoExtensao=true;
  
    this.estadoDoRad.ano=this.periodoService.ano
  this.estadoDoRad.periodo=this.periodoService.periodoPeriodo
  this.estadoRadService.addEstadoDoRad(this.estadoDoRad);
  
  this.router.navigate([ '/CorrecaoPitCoordenacaoDeExtensao']);
}

    this.estadoDoPitService.addEstadoDoPit(this.estado);

 
}
}
