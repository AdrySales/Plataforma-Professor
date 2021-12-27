import { Component, OnInit } from '@angular/core';
import {EstadoDoPitService} from '../services/estado-do-pit.service';
import {UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';
import {ExtensaoService} from '../services/extensao.service'
@Component({
  selector: 'app-correcao-pit-coordenacao-de-extensao',
  templateUrl: './correcao-pit-coordenacao-de-extensao.component.html',
  styleUrls: ['./correcao-pit-coordenacao-de-extensao.component.css']
})
export class CorrecaoPitCoordenacaoDeExtensaoComponent implements OnInit {

  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
 ArrayExtensao=[];

  constructor(public extensaoService:ExtensaoService ,public estadoDoPit:EstadoDoPitService,public usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
   this.estadoDoPit.getEstadoDoPit().subscribe(estados =>{  
    this.ArrayEstados=estados;
  
  });
  this.extensaoService.getExtensao().subscribe(extensao =>{  
    this.ArrayExtensao=extensao;

      
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
