import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../services/usuario.service';
import{EstadoDoPitService} from '../services/estado-do-pit.service';
import {EstadoDoPit} from '../modelos/estadoDoPit'
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
import {CursosService} from '../services/cursos.service'
import { Administrativo } from '../modelos/administrativo';
import { AdministrativoService } from '../services/administrativo.service';
import {ComponenteCurricularService} from '../services/componente-curricular.service'
import {PeriodoService} from '../services/periodo.service';

@Component({
  selector: 'app-listagem-de-atividades',
  templateUrl: './listagem-de-atividades.component.html',
  styleUrls: ['./listagem-de-atividades.component.css']
})
export class ListagemDeAtividadesComponent implements OnInit {

   
  //---------------------------Nome do professor---------------------------------- //
  nomeDeUsuario=this.usuarioService.nome;
  nomeCoordenador=this.usuarioService.nomeCoordenador;
  email=this.usuarioService.email;

  ano=this.periodoService.ano;
  periodo=this.periodoService.periodoPeriodo;



  atividades:Atividade[];
posicao=0;
cursos=[];
componentesCurriculares=[];


AulasDoProf:Aulas[];



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


  estado:EstadoDoPit={
    enviado:true,
    emailProfessor:this.email,
    periodo:'',
    ano:'',
    aprovadoGeral:false,
    aprovadoDirecaoDeEnsino:false,
    aprovadoExtensao:false,
    aprovadoPesquisa:false
  }
//------------------------Arrays e objetos para utilização do CRUD------------------------------//
idUtilizadoApoio;
idUtilizadoAulas;
idUtilizadoPesquisa;
idUtilizadoExtensao;
idUtilizadoAdministrativo;
editState:boolean =false;
ArrayAulas=[];
aulaToEdit: Aulas;
chTotalDeAulas=0;
chTotalDePreparacaoDeAulas=0;

arrayApoioAoEnsino=[];
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

ArrayEstados=[];

chTotal=0;



  constructor(public cursosService:CursosService,public componenteCurricularService:ComponenteCurricularService,public periodoService:PeriodoService,public  usuarioService : UsuarioService, public atividadesService:AtividadesService,
    public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, 
    public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, 
    public administrativoService:AdministrativoService,public router:Router, public estadoPit:EstadoDoPitService) { 
   
  
  }

//------------------Aqui os arrays de cada tipo de atividade recebe suas atividades específicas-----------//
  ngOnInit(){
    
    this.direcionamentoDeAtividades();
    this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoioAoEnsino =>{
      this.arrayApoioAoEnsino= apoioAoEnsino;
      
      for(var cont=0;cont<=this.arrayApoioAoEnsino.length;cont++){
        if(this.arrayApoioAoEnsino[cont].emailProfessor==this.email && this.arrayApoioAoEnsino[cont].ano==this.ano && this.arrayApoioAoEnsino[cont].periodo==this.periodo){
        this.chTotalDeApoioAoEnsino=this.chTotalDeApoioAoEnsino + parseInt(this.arrayApoioAoEnsino[cont].chSemanal);
        this.chTotal=this.chTotal+ parseInt(this.arrayApoioAoEnsino[cont].chSemanal);
        }
        }
         
    });

    this.aulasService.getAulas().subscribe(aulas =>{
      this.ArrayAulas=aulas;
      console.log(this.periodo +"  " + this.ano)
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
      }
        }
    });

    this.extensaoService.getExtensao().subscribe(extensao =>{
      this.ArrayExtensao= extensao;
      for(var cont=0;cont<=this.ArrayExtensao.length;cont++){
        if(this.ArrayExtensao[cont].emailProfessor==this.email && this.ArrayExtensao[cont].ano==this.ano && this.ArrayExtensao[cont].periodo==this.periodo){
        this.chTotalDeExtensao=this.chTotalDeExtensao + parseInt(this.ArrayExtensao[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayExtensao[cont].chSemanal);
      }
        }
    });
    this.estadoPit.getEstadoDoPit().subscribe(estados =>{  
      this.ArrayEstados=estados;
      for(var cont=0;cont<=this.ArrayEstados.length;cont++){
        if(this.ArrayEstados[cont].emailProfessor==this.email && this.ArrayEstados[cont].periodo==this.periodo && this.ArrayEstados[cont].ano==this.ano){
          this.estadoPit.estadoDoPitParaCorrecao=this.ArrayEstados[cont];
          break;
        }else{
          this.estadoPit.estadoDoPitParaCorrecao=null
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

    this.cursosService.getCursos().subscribe(cursos =>{
      this.cursos= cursos;
        
    });

}




telaPit(){
  this.router.navigate([ '/telaPit']);
}
enviarParaAnalise(){
  this.estado.ano=this.periodoService.ano;
  this.estado.periodo=this.periodoService.periodoPeriodo;
  var excluir=this.estadoPit.estadoDoPitParaCorrecao
  if(excluir!=null){
    this.estadoPit.deleteEstadoDoPit(excluir);
  }

  this.estadoPit.addEstadoDoPit(this.estado);
  this.router.navigate([ '/finalizacao']);
}


//____________________________________________Aulas________________________________________________________________//
onSubmitAulas(){
  this.aulas.emailProfessor=this.email;
  this.aulasService.addAula(this.aulas);
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
this.idUtilizadoAulas=this.aulaToEdit.id;
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
  this.apoioAoEnsinoService.addApoioAoEnsino(this.apoioAoEnsino);
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
this.idUtilizadoApoio=this.apoioAoEnsinoToEdit.id;
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
  this.pesquisaService.addPesquisa(this.pesquisa);
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
this.idUtilizadoPesquisa=this.pesquisaToEdit.id;
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
  this.extensaoService.addExtensao(this.extensao);
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
this.idUtilizadoExtensao=this.extensaoToEdit.id;
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
  this.administrativoService.addAdministrativo(this.administrativo);
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
this.idUtilizadoAdministrativo=this.administrativoToEdit.id;
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


}
