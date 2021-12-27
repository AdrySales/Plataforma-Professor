import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../services/usuario.service';

import {AtividadesService} from '../services/atividades.service';
import { Atividade } from '../modelos/atividade';

import { Router } from '@angular/router';

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

import {CursosService} from '../services/cursos.service'
import {ComponenteCurricularService} from '../services/componente-curricular.service'
import { PeriodoService } from '../services/periodo.service';
@Component({
  selector: 'app-tela-pit',
  templateUrl: './tela-pit.component.html',
  styleUrls: ['./tela-pit.component.css']
})
export class TelaPitComponent implements OnInit {
//---------------------------Nome do professor---------------------------------- //
ativar;
  nomeDeUsuario=this.usuarioService.nome;
  email=this.usuarioService.email;
  componentesCurricularesEnviar:string='';

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

  //------------------Objetos para cadastro das atividades----------------------------//
  aulas:Aulas={
    chDePreparacao:0,
    chSemanal:0,
    chTotaldoComponente:0,
    componenteCurricular:'',
    curso:'',
    emailProfessor:this.email,
    periodo:this.periodoAulas,
    ano:this.anoAulas
  }
 
  apoioAoEnsino:ApoioAoEnsino={
    atividade:'',
    lhp:'',
    chSemanal:0,
    emailProfessor:this.email,
    periodo:this.periodoApoioAoEnsino,
    ano:this.anoApoioAoEnsino
  }


  pesquisa:Pesquisa={
    atividade:'',
    chSemanal:0,
    emailProfessor:this.email,
    periodo:this.periodoPesquisa,
    ano:this.anoPesquisa
  }

  extensao:Extensao={
    projeto:'',
    chSemanal:0,
    inicio:'',
    termino:'',
    participacao:'',
    emailProfessor:this.email,
    periodo:this.periodoExtensao,
    ano:this.anoExtensao
  }

  administrativo:Administrativo={
    atividade:'',
    chSemanal:0,
    inicio:'',
    termino:'',
    portaria:'',
    emailProfessor:this.email,
    periodo:this.periodoAdministrativo,
    ano:this.anoAdministrativo
  }

  


//------------------------Arrays e objetos para utilização do CRUD------------------------------//
  atividades:Atividade[];
  posicao=0;
cursos=[];
componentesCurriculares=[];
  editState:boolean =false;
  ArrayAulas:Aulas[];
  aulaToEdit: Aulas;
  chTotalDeAulas:number=0;
  chTotalDePreparacaoDeAulas;
  
  ArrayApoioAoEnsino:ApoioAoEnsino[];
  apoioAoEnsinoToEdit: ApoioAoEnsino;
  chTotalDeApoioAoEnsino;

  ArrayPesquisa=[];
  pesquisaToEdit: Pesquisa;
  chTotalDePesquisa;
   
  ArrayExtensao=[];
  extensaoToEdit: Extensao;
  chTotalDeExtensao;

  ArrayAdministrativo=[];
  administrativoToEdit: Administrativo;
  chTotalDeAdministrativo;


  AulasDoProf:Aulas[];


  constructor(public periodoService:PeriodoService,public componenteCurricularService:ComponenteCurricularService,public cursosService:CursosService,public  usuarioService : UsuarioService,public router:Router,public atividadesService:AtividadesService,public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, public administrativoService:AdministrativoService) { 
  
  }
 
//------------------Aqui os arrays de cada tipo de atividade recebe suas atividades específicas-----------//
  ngOnInit(): void {
 
   this.direcionamentoDeAtividades();
 
   this.cursosService.getCursos().subscribe(curso =>{  
    this.cursos=curso;
  });

 
   this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoio =>{  
    this.ArrayApoioAoEnsino=apoio;
  });



    this.aulasService.getAulas().subscribe(aulas =>{  
      this.ArrayAulas=aulas;
    });


    this.pesquisaService.getPesquisa().subscribe(pesquisa =>{
      this.ArrayPesquisa=pesquisa ;
    });

    this.extensaoService.getExtensao().subscribe(extensao =>{
      this.ArrayExtensao= extensao;
    });

    this.administrativoService.getAdministrativo().subscribe(administrativo =>{
      this.ArrayAdministrativo= administrativo;
    });
}

//____________________________________________Aulas________________________________________________________________//
onSubmitAulas(){
  this.aulas.emailProfessor=this.email;
  if(this.aulas.chSemanal>0 && this.aulas.chDePreparacao>0  && this.aulas.chTotaldoComponente>0 ){
    this.aulasService.addAula(this.aulas);
  }else{
alert("A carga horária informada é inválida, o cadastro desta atividade não foi realizado!")
  }

  this.aulas.chDePreparacao=0;
  this.aulas.chSemanal=0;
  this.aulas.chTotaldoComponente=0;
  this.aulas.componenteCurricular='';
  this.aulas.curso='';
  this.aulas.emailProfessor='';
 
}
  
deleteAula( event, atividade :Aulas){
  this.clearStateAula();
  this.aulasService.deleteAula(atividade);
 
}
editAula( event, aula:Aulas){
this.editState=true;
this.aulaToEdit=aula;
}
clearStateAula(){
this.editState=false;
this.aulaToEdit=null;
}
updateAula(aula:Aulas){
this.aulasService.updateAula(aula);
this.clearStateAula();
}




//____________________________________________Apoio ao Ensino________________________________________________________//
onSubmitApoioAoEnsino(){
  this.apoioAoEnsino.emailProfessor=this.email;
  if(this.apoioAoEnsino.chSemanal>0){
    this.apoioAoEnsinoService.addApoioAoEnsino(this.apoioAoEnsino);
  }else{
alert("A carga horária informada é inválida, o cadastro desta atividade não foi realizado!")
  
  }

  this.apoioAoEnsino.atividade='',
  this.apoioAoEnsino.chSemanal=0,
  this.apoioAoEnsino.lhp=''
 
}
  
deleteApoioAoEnsino( event, atividade :ApoioAoEnsino){
  this.clearStateAula();
  this.apoioAoEnsinoService.deleteApoioAoEnsino(atividade);
  
 
}
editApoioAoEnsino( event, apoioAoEnsino:ApoioAoEnsino){
this.editState=true;
this.apoioAoEnsinoToEdit=apoioAoEnsino;
}
clearStateApoioAoEnsino(){
this.editState=false;
this.apoioAoEnsinoToEdit=null;
}
updateApoioAoEnsino(apoioAoEnsino:ApoioAoEnsino){
this.apoioAoEnsinoService.updateApoioAoEnsino(apoioAoEnsino);
this.clearStateApoioAoEnsino();
}




//____________________________________________Pesquisa__________________________________________________________________//
onSubmitPesquisa(){
  this.pesquisa.emailProfessor=this.email;
  if(this.pesquisa.chSemanal>0){
    this.pesquisaService.addPesquisa(this.pesquisa);
  }else{
alert("A carga horária informada é inválida, o cadastro desta atividade não foi realizado!")
  
  }
  this.pesquisa.atividade='',
  this.pesquisa.chSemanal=0
 
}
  
deletePesquisa( event, atividade :Pesquisa){
  this.clearStateAula();
  this.pesquisaService.deletePesquisa(atividade);
}
editPesquisa( event, pesquisa:Pesquisa){
this.editState=true;
this.pesquisaToEdit=pesquisa;
}
clearStatePesquisa(){
this.editState=false;
this.pesquisaToEdit=null;
}
updatePesquisa(pesquisa:Pesquisa){
this.pesquisaService.updatePesquisa(pesquisa);
this.clearStatePesquisa();
}


//____________________________________________Extensão__________________________________________________________________//
onSubmitExtensao(){
  this.extensao.emailProfessor=this.email;
  if(this.extensao.chSemanal>0){
    this.extensaoService.addExtensao(this.extensao);
  }else{
alert("A carga horária informada é inválida, o cadastro desta atividade não foi realizado!")
  
  }

  this.extensao.projeto='',
  this.extensao.chSemanal=0,
 this.extensao.participacao=''
}
  
deleteExtensao( event, extensao :Extensao){
  this.clearStateExtensao();
  this.extensaoService.deleteExtensao(extensao);
}
editExtensao( event, extensao:Extensao){
this.editState=true;
this.extensaoToEdit=extensao;
}
clearStateExtensao(){
this.editState=false;
this.extensaoToEdit=null;
}
updateExtensao(extensao:Extensao){
this.extensaoService.updateExtensao(extensao);
this.clearStateExtensao();
}

//____________________________________________Administrativo-Pedagógico__________________________________________________________________//
onSubmitAdministrativo(){
  this.administrativo.emailProfessor=this.email;
  if(this.administrativo.chSemanal>0){
    this.administrativoService.addAdministrativo(this.administrativo);
  }else{
alert("A carga horária informada é inválida, o cadastro desta atividade não foi realizado!")
  
  }

  this.administrativo.atividade='',
  this.administrativo.chSemanal=0,
 this.administrativo.portaria=''
}
  
deleteAdministrativo( event, administrativo :Administrativo){
  this.clearStateAdministrativo();
  this.administrativoService.deleteAdministrativo(administrativo);
}
editAdministrativo( event, administrativo:Administrativo){
this.editState=true;
this.administrativoToEdit=administrativo;
}
clearStateAdministrativo(){
this.editState=false;
this.administrativoToEdit=null;
}
updateAdministrativo(administrativo:Administrativo){
this.administrativoService.updateAdministrativo(administrativo);
this.clearStateAdministrativo();
}


componentesCurricularesDoCurso=[];
pegarComponentes(nome){
  this.componentesCurricularesDoCurso=[];
this.componenteCurricularService.getComponenteCurricular().subscribe(componentes =>{
    this.componentesCurriculares=componentes;
  for(var cont=0;cont<=this.componentesCurriculares.length;cont++){
    if(this.componentesCurriculares[cont].curso==nome){
     this.componentesCurricularesDoCurso.push(this.componentesCurriculares[cont].nome);
 
    }
    }
});

}










//------Direcionamentos:Eles pegam o array de atividades e distribuem de acordo com o tipo dela------------------------//
ArrayAtivDeApoioAoEnsino=[];
  ArrayAtivDePesquisa=[];
  ArrayAtivDeExtensao=[];
  ArrayAtivAdministrativo=[];

direcionamentoDeAtividades(){
    this.atividadesService.getAtividades().subscribe(atividades =>{
    
      this.atividades=atividades;

   for(var cont=0;cont<=this.atividades.length;cont++){
   
  if(this.atividades[cont].tipo=="Atividades de apoio ao ensino"){
      this.ArrayAtivDeApoioAoEnsino.push(this.atividades[cont]);   
  }if(this.atividades[cont].tipo=="Atividades de pesquisa e pós-graduação"){
    this.ArrayAtivDePesquisa.push(this.atividades[cont]);   
  }if(this.atividades[cont].tipo=="Atividades de extensão"){
  this.ArrayAtivDeExtensao.push(this.atividades[cont]);   
  }if(this.atividades[cont].tipo=="Atividades administrativo-pedagógicas"){
  this.ArrayAtivAdministrativo.push(this.atividades[cont]);   
}
    }
  });
}

preencheChApoio(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.apoioAoEnsino.atividade){
this.apoioAoEnsino.chSemanal=atividades[cont].ch;
}
}
    });


}


preencheChPesquisa(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.pesquisa.atividade){
this.pesquisa.chSemanal=atividades[cont].ch;
}
}
    });


}


preencheChExtensao(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.extensao.projeto){
this.extensao.chSemanal=atividades[cont].ch;
}
}
    });


}


preencheChAdministrativo(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.administrativo.atividade){
this.administrativo.chSemanal=atividades[cont].ch;
}
}
    });


}
telaListagem(){
  this.router.navigate([ '/listagemC']);
}
}

