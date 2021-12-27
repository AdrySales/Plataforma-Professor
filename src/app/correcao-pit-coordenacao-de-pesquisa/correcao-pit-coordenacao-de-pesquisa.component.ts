import { Component, OnInit } from '@angular/core';
import {EstadoDoPitService} from '../services/estado-do-pit.service';
import {UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';
import {PesquisaService} from '../services/pesquisa.service'
@Component({
  selector: 'app-correcao-pit-coordenacao-de-pesquisa',
  templateUrl: './correcao-pit-coordenacao-de-pesquisa.component.html',
  styleUrls: ['./correcao-pit-coordenacao-de-pesquisa.component.css']
})
export class CorrecaoPitCoordenacaoDePesquisaComponent implements OnInit {

  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
 ArrayPesquisa=[];
 ArrayPeriodosExtensao=[];
  constructor(public pesquisaService:PesquisaService ,public estadoDoPit:EstadoDoPitService,public usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
   this.estadoDoPit.getEstadoDoPit().subscribe(estados =>{  
    this.ArrayEstados=estados;
  
  });
  this.pesquisaService.getPesquisa().subscribe(pesquisa =>{  
    this.ArrayPesquisa=pesquisa;
 
  });
 

  }

  telaCorrecao(email,periodo,ano){
    this.estadoDoPit.emailParaCorrecao=email;
    this.estadoDoPit.periodoParaCorrecao=periodo;
    this.estadoDoPit.anoParaCorrecao=ano;
    for(var cont=0;cont<=this.ArrayEstados.length;cont++){
      if(this.ArrayEstados[cont].emailProfessor==email && this.ArrayEstados[cont].periodo==periodo && this.ArrayEstados[cont].ano==ano){
        this.estadoDoPit.estadoDoPitParaCorrecao=this.ArrayEstados[cont];
        break;
      }
   }
    this.router.navigate([ '/correcaoPit']);
  }


}

