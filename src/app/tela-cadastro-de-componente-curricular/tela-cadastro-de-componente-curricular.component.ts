import { Component, OnInit } from '@angular/core';
import {ComponenteCurricularService} from '../services/componente-curricular.service'
import {ComponenteCurricular} from '../modelos/componenteCurricular'
import {CursosService} from '../services/cursos.service'

@Component({
  selector: 'app-tela-cadastro-de-componente-curricular',
  templateUrl: './tela-cadastro-de-componente-curricular.component.html',
  styleUrls: ['./tela-cadastro-de-componente-curricular.component.css']
})
export class TelaCadastroDeComponenteCurricularComponent implements OnInit {
  ArrayCursos=[];
  ArrayComponenteCurricular=[];

  editState:boolean =false;
  componenteToEdit: ComponenteCurricular;
  componenteCurricular:ComponenteCurricular={
    nome:'',
    ch:0,
    curso:''
  }
  constructor(public cursosServices:CursosService,public componenteCurricularService:ComponenteCurricularService) { }

  ngOnInit(): void {
    this.cursosServices.getCursos().subscribe(cursos =>{  
      this.ArrayCursos=cursos;
    });
    this.componenteCurricularService.getComponenteCurricular().subscribe(componente =>{  
      this.ArrayComponenteCurricular=componente;
    });
  }
  onSubmit(){
   
        this.componenteCurricularService.addComponenteCurricular(this.componenteCurricular);
      
    
  }
  deleteComponente( event, componente :ComponenteCurricular){
    this.clearState();
    this.componenteCurricularService.deleteComponenteCurricular( componente);
}

editComponente( event, componente :ComponenteCurricular){
this.editState=true;
this.componenteToEdit=componente;
}

clearState(){
  this.editState=false;
  this.componenteToEdit=null;
}

updateComponente(componente :ComponenteCurricular){
this.componenteCurricularService.updateComponenteCurricular(componente);
this.clearState();
}

}
