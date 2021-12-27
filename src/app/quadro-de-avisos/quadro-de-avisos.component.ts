import { Component, OnInit } from '@angular/core';
import {AvisosService} from '../services/avisos.service';
import {Avisos} from '../modelos/avisos'
@Component({
  selector: 'app-quadro-de-avisos',
  templateUrl: './quadro-de-avisos.component.html',
  styleUrls: ['./quadro-de-avisos.component.css']
})
export class QuadroDeAvisosComponent implements OnInit {

  constructor(public avisosService:AvisosService) { }
  ArrayAvisos=[];
  ngOnInit(): void {
    this.avisosService.getAvisos().subscribe(avisos =>{
      this.ArrayAvisos=avisos;
    });
  }

}
