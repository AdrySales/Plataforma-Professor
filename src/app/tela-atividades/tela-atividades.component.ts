import { Component, OnInit, ɵConsole } from '@angular/core';
import { Atividade } from '../modelos/atividade';
import {AtividadesService} from '../services/atividades.service'
@Component({
  selector: 'app-tela-atividades',
  templateUrl: './tela-atividades.component.html',
  styleUrls: ['./tela-atividades.component.css']
})
export class TelaAtividadesComponent implements OnInit {
 atividade:Atividade={
   nome:'',
   ch:0,
   tipo:''
 }
pesquisar;
  atividades:Atividade[];
  editState:boolean =false;
  atividadeToEdit: Atividade;
  constructor(public AtividadesService:AtividadesService) { }

  ngOnInit() {
    this.AtividadesService.getAtividades().subscribe(atividades =>{
      //console.log(atividades);
      this.atividades=atividades;
    });
    
  }

onSubmit(){
  if(this.atividade.nome != '' && this.atividade.tipo!=''){
      this.AtividadesService.addAtividade(this.atividade);
      this.atividade.nome='';
      this.atividade.ch=0;
      this.atividade.tipo='';
  }
  
}

deleteAtividade( event, atividade :Atividade){
    this.clearState();
    this.AtividadesService.deleteAtividade(atividade);
}

editAtividade( event, atividade:Atividade){
this.editState=true;
this.atividadeToEdit=atividade;
}

clearState(){
  this.editState=false;
  this.atividadeToEdit=null;
}

updateAtividade(atividade:Atividade){
this.AtividadesService.updateAtividade(atividade);
this.clearState();
}
}
