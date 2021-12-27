import { Component, OnInit } from '@angular/core';
import {AvisosService} from '../services/avisos.service';
import {Avisos} from '../modelos/avisos'
@Component({
  selector: 'app-editor-quadro-de-avisos',
  templateUrl: './editor-quadro-de-avisos.component.html',
  styleUrls: ['./editor-quadro-de-avisos.component.css']
})
export class EditorQuadroDeAvisosComponent implements OnInit {
  aviso:Avisos={
    aviso:'',
    
  }
ArrayAvisos=[];
  constructor(public avisosService:AvisosService) { }

  ngOnInit(): void {
    this.avisosService.getAvisos().subscribe(componente =>{  
      this.ArrayAvisos=componente;
    });
    
  }
  postarAviso(){
    this.avisosService.addAviso(this.aviso);
  }

 deleteAvisos(aviso){
  this.avisosService.deleteAvisos(aviso);
 }

}
