import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import {AtividadesService} from '../services/atividades.service';
import { Atividade } from '../modelos/atividade';
import { Router } from '@angular/router';
import { Aulas } from '../modelos/aulas';
import { AulasService } from '../services/aulas.service';
import{EstadoDoRadService} from '../services/estado-do-rad.service';
import {EstadoDoRad} from '../modelos/estadoDoRad'
import { ApoioAoEnsino } from '../modelos/apoioAoEnsino';
import { ApoioAoEnsinoService } from '../services/apoio-ao-ensino.service';

import { Pesquisa } from '../modelos/pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

import { Extensao } from '../modelos/extensao';
import { ExtensaoService } from '../services/extensao.service';

import { Administrativo } from '../modelos/administrativo';
import { AdministrativoService } from '../services/administrativo.service';
import{PeriodoService} from '../services/periodo.service'
import {ComponenteCurricularService} from '../services/componente-curricular.service'

import {ComentariosRadService} from '../services/comentarios-rad.service'
import {ComentarioRad} from '../modelos/comentarioRad'
@Component({
  selector: 'app-tela-rad',
  templateUrl: './tela-rad.component.html',
  styleUrls: ['./tela-rad.component.css']
})
export class TelaRadComponent implements OnInit {
  
 //---------------------------Nome do professor---------------------------------- //
 estadoExcluir=this.estadoRadService.estadoDoRadParaCorrecao;
 nomeDeUsuario=this.usuarioService.nome;
 email=this.usuarioService.email;
 nomeCoordenador=this.usuarioService.nomeCoordenador;

   ano=this.periodoService.ano;
  periodo=this.periodoService.periodoPeriodo;

 estado:EstadoDoRad={
  enviado:false,
  emailProfessor:this.email,
  periodo:this.periodo,
  ano:this.ano,
  aprovadoGeral:false,
    aprovadoDirecaoDeEnsino:false,
    aprovadoExtensao:false,
    aprovadoPesquisa:false

}

comentarioRad:ComentarioRad={
  idDaAtividade:'',
  comentario:'',
  emailProfessor:this.email
}
comentarioRadFinal:ComentarioRad={
  idDaAtividade:'',
  comentario:'',
  emailProfessor:this.email
}


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

//------------------------Arrays e objetos para utilização do CRUD------------------------------//




ArrayAulas=[];
chTotalDeAulas=0;
chTotalDePreparacaoDeAulas=0;

arrayApoioAoEnsino=[];
chTotalDeApoioAoEnsino=0;

ArrayPesquisa=[];
chTotalDePesquisa=0;
 
ArrayExtensao=[];
chTotalDeExtensao=0;

ArrayAdministrativo=[];
chTotalDeAdministrativo=0;

chTotal=0;





 constructor(public comentarioRadService:ComentariosRadService,public componenteCurricularService:ComponenteCurricularService,public periodoService:PeriodoService,public  usuarioService : UsuarioService, public atividadesService:AtividadesService,
   public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, 
   public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, 
   public administrativoService:AdministrativoService,public router:Router, public estadoRadService:EstadoDoRadService) { 
  
 
 }

//------------------Aqui os arrays de cada tipo de atividade recebe suas atividades específicas-----------//
 ngOnInit(){
 

  
  this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoioAoEnsino =>{
    this.arrayApoioAoEnsino=apoioAoEnsino;

    for(var cont=0;cont<=this.arrayApoioAoEnsino.length;cont++){
      if(this.arrayApoioAoEnsino[cont].emailProfessor==this.email && this.arrayApoioAoEnsino[cont].ano==this.anoApoioAoEnsino && this.arrayApoioAoEnsino[cont].periodo==this.periodoApoioAoEnsino){
      this.chTotalDeApoioAoEnsino=this.chTotalDeApoioAoEnsino + parseInt(this.arrayApoioAoEnsino[cont].chSemanal);
      this.chTotal=this.chTotal+ parseInt(this.arrayApoioAoEnsino[cont].chSemanal);
      }
      }
       
       
  });

  this.aulasService.getAulas().subscribe(aulas =>{
    this.ArrayAulas=aulas;
    for(var cont=0;cont<=this.ArrayAulas.length;cont++){
      if(this.ArrayAulas[cont].emailProfessor==this.email && this.ArrayAulas[cont].ano==this.anoAulas && this.ArrayAulas[cont].periodo==this.periodoAulas){
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
      if(this.ArrayPesquisa[cont].emailProfessor==this.email && this.ArrayPesquisa[cont].ano==this.anoPesquisa && this.ArrayPesquisa[cont].periodo==this.periodoPesquisa){
      this.chTotalDePesquisa=this.chTotalDePesquisa + parseInt(this.ArrayPesquisa[cont].chSemanal);
      this.chTotal=this.chTotal+parseInt(this.ArrayPesquisa[cont].chSemanal);
    }
      }
  });

  this.extensaoService.getExtensao().subscribe(extensao =>{
    this.ArrayExtensao= extensao;
    for(var cont=0;cont<=this.ArrayExtensao.length;cont++){
      if(this.ArrayExtensao[cont].emailProfessor==this.email && this.ArrayExtensao[cont].ano==this.anoExtensao && this.ArrayExtensao[cont].periodo==this.periodoExtensao){
      this.chTotalDeExtensao=this.chTotalDeExtensao + parseInt(this.ArrayExtensao[cont].chSemanal);
      this.chTotal=this.chTotal+parseInt(this.ArrayExtensao[cont].chSemanal);
    }
      }
  });

  this.administrativoService.getAdministrativo().subscribe(administrativo =>{
    this.ArrayAdministrativo= administrativo;
    for(var cont=0;cont<=this.ArrayAdministrativo.length;cont++){
      if(this.ArrayAdministrativo[cont].emailProfessor==this.email && this.ArrayAdministrativo[cont].ano==this.anoAdministrativo && this.ArrayAdministrativo[cont].periodo==this.periodoAdministrativo){
      this.chTotalDeAdministrativo=this.chTotalDeAdministrativo + parseInt(this.ArrayAdministrativo[cont].chSemanal);
      this.chTotal=this.chTotal+ parseInt(this.ArrayAdministrativo[cont].chSemanal);
    }
      }
      
  });



this.chTotal=this.chTotalDeAdministrativo+this.chTotalDeApoioAoEnsino+this.chTotalDeAulas+this.chTotalDeExtensao+this.chTotalDePesquisa+this.chTotalDePreparacaoDeAulas;

}





//-------------------------------CRUD do comentario---------------------------------------------//
editState:boolean =false;

comentarioToEdit: ComentarioRad;
onSubmitComentariosRad(){
  this.comentarioRad.emailProfessor=this.email
  this.comentarioRadService.addComentario(this.comentarioRad);
  this.comentarioRad.comentario=''
 
}
onSubmitComentariosRadFinal(){
  this.comentarioRadFinal.emailProfessor=this.email
  this.comentarioRadFinal.idDaAtividade=this.periodoService.ano+"/"+this.periodoService.periodoPeriodo;
  this.comentarioRadService.addComentario(this.comentarioRadFinal);
  this.comentarioRadFinal.comentario=''
  this.estadoRadService.deleteEstadoDoRad(this.estadoExcluir);
  this.estado.enviado=true

  this.estadoRadService.addEstadoDoRad(this.estado);
  this.router.navigate([ '/finalizacao']);
 
}

editComentariosRad( event, comentario:ComentarioRad){
this.editState=true;
this.comentarioToEdit=comentario;
}
clearStateComentariosRad(){
this.editState=false;
this.comentarioToEdit=null;
}
updateComentariosRad( comentario:ComentarioRad){
this.comentarioRadService.updateComentarioRad(comentario);
this.clearStateComentariosRad();
}


preencheId(id){
this.comentarioRad.idDaAtividade=id
}

}
























