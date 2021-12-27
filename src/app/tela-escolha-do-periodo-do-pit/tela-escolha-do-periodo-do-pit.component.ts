import { Component, OnInit } from '@angular/core';

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
import {PeriodoService} from '../services/periodo.service';
import {Periodo} from '../modelos/periodo';
import {UsuarioService} from '../services/usuario.service';
@Component({
  selector: 'app-tela-escolha-do-periodo-do-pit',
  templateUrl: './tela-escolha-do-periodo-do-pit.component.html',
  styleUrls: ['./tela-escolha-do-periodo-do-pit.component.css']
})
export class TelaEscolhaDoPeriodoDoPitComponent implements OnInit {

emailProfessor=this.usuarioService.email;

periodo:Periodo={
emailProfessor:this.emailProfessor,
ano:'',
periodo:''
}
constructor(public periodoService:PeriodoService,public usuarioService:UsuarioService,public router:Router,public aulasService:AulasService, 
  public apoioAoEnsinoService:ApoioAoEnsinoService, public pesquisaService:PesquisaService, 
  public extensaoService:ExtensaoService, public administrativoService:AdministrativoService) { 
}

  ngOnInit(): void {
  }

adicionarAnoePeriodo(){


this.periodoService.ano=this.periodo.ano;
this.periodoService.periodoPeriodo=this.periodo.periodo;

this.periodoService.addPeriodo(this.periodo);
this.router.navigate([ '/telaPit']);
}
}
