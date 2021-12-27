import { Component, OnInit } from '@angular/core';
import {EstadoDoRadService} from '../services/estado-do-rad.service';
import {UsuarioService} from '../services/usuario.service';
import {Router} from '@angular/router';
import {PesquisaService} from '../services/pesquisa.service'
@Component({
  selector: 'app-correcao-rad-coordenacao-de-pesquisa',
  templateUrl: './correcao-rad-coordenacao-de-pesquisa.component.html',
  styleUrls: ['./correcao-rad-coordenacao-de-pesquisa.component.css']
})
export class CorrecaoRadCoordenacaoDePesquisaComponent implements OnInit {

  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
  ArrayPesquisa=[];
 ArrayPeriodosExtensao=[];
  constructor(public pesquisaService:PesquisaService ,public estadoDoRad:EstadoDoRadService,public usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
   this.estadoDoRad.getEstadoDoRad().subscribe(estados =>{  
    this.ArrayEstados=estados;
  });
 
  this.pesquisaService.getPesquisa().subscribe(pesquisa =>{  
    this.ArrayPesquisa=pesquisa;
 
  });
  }

  telaCorrecao(email,periodo,ano){
    this.estadoDoRad.emailParaCorrecao=email;
    this.estadoDoRad.periodoParaCorrecao=periodo;
    this.estadoDoRad.anoParaCorrecao=ano;
    for(var cont=0;cont<=this.ArrayEstados.length;cont++){
      if(this.ArrayEstados[cont].emailProfessor==email && this.ArrayEstados[cont].periodo==periodo && this.ArrayEstados[cont].ano==ano){
        this.estadoDoRad.estadoDoRadParaCorrecao=this.ArrayEstados[cont];
        break;
      }
   }
    this.router.navigate([ '/correcaoRad']);
  }




}
