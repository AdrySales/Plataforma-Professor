import { Component, OnInit } from '@angular/core';
import {CursosService} from '../services/cursos.service'
import {Cursos} from '../modelos/cursos'
@Component({
  selector: 'app-tela-cadastro-de-cursos',
  templateUrl: './tela-cadastro-de-cursos.component.html',
  styleUrls: ['./tela-cadastro-de-cursos.component.css']
})
export class TelaCadastroDeCursosComponent implements OnInit {
ArrayCursos=[];
curso:Cursos={
nome:''
}


  constructor(public cursosServices:CursosService) { }

  ngOnInit(): void {
    
   this.cursosServices.getCursos().subscribe(cursos =>{  
    this.ArrayCursos=cursos;
  });

  }
cadastrar(){
this.cursosServices.addCursos(this.curso);
}
deleteCursos( event, curso :Cursos){
  this.cursosServices.deleteCursos(curso);
}
}
