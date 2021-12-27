import { Component, OnInit } from '@angular/core';
import {EstadoDoPitService} from '../services/estado-do-pit.service'
import {EstadoDoRadService} from '../services/estado-do-rad.service'
import {UsuarioService} from '../services/usuario.service'
import {EstadoDoPit} from '../modelos/estadoDoPit'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Component({
  selector: 'app-estatus-documento',
  templateUrl: './estatus-documento.component.html',
  styleUrls: ['./estatus-documento.component.css']
})
export class EstatusDocumentoComponent implements OnInit {
  ArrayEstadosDoPit=[]
  ArrayEstadosDoPitPegar=[]
  ArrayEstadosDoRad=[]
  ArrayEstadosDoRadPegar=[]
  email=this.usuarioService.email;
  status;

  
  constructor(public estadoDoPitService:EstadoDoPitService,public estadoDoRadService:EstadoDoRadService, public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.estadoDoPitService.getEstadoDoPit().subscribe(estado =>{  
      this.ArrayEstadosDoPit=estado;
      for(var cont=0;cont<=this.ArrayEstadosDoPit.length;cont++){
        if(this.ArrayEstadosDoPit[cont].emailProfessor==this.email){
      
       
        this.ArrayEstadosDoPitPegar[cont]=this.ArrayEstadosDoPit[cont]

        
        if(this.ArrayEstadosDoPit[cont].aprovadoGeral==true){
          this.ArrayEstadosDoPitPegar[cont].aprovadoGeral="Aprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoGeral)
        } else{
          this.ArrayEstadosDoPitPegar[cont].aprovadoGeral="Reprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoGeral)
        }

        if(this.ArrayEstadosDoPit[cont].aprovadoDirecaoDeEnsino==true){
          this.ArrayEstadosDoPitPegar[cont].aprovadoDirecaoDeEnsino="Aprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoDirecaoDeEnsino)
        } else{
          this.ArrayEstadosDoPitPegar[cont].aprovadoDirecaoDeEnsino="Reprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoDirecaoDeEnsino)
        }
      
        if(this.ArrayEstadosDoPit[cont].aprovadoPesquisa==true){
          this.ArrayEstadosDoPitPegar[cont].aprovadoPesquisa="Aprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoPesquisa)
        } else{
          this.ArrayEstadosDoPitPegar[cont].aprovadoPesquisa="Reprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoPesquisa)
        }

        if(this.ArrayEstadosDoPit[cont].aprovadoExtensao==true){
          this.ArrayEstadosDoPitPegar[cont].aprovadoExtensao="Aprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoExtensao)
        } else{
          this.ArrayEstadosDoPitPegar[cont].aprovadoExtensao="Reprovado"
          console.log( this.ArrayEstadosDoPitPegar[cont].aprovadoExtensao)
        }
      
        console.log( this.ArrayEstadosDoPitPegar[cont])
      }
    }
    });
    this.estadoDoRadService.getEstadoDoRad().subscribe(estado =>{  
      this.ArrayEstadosDoRad=estado;


      for(var cont=0;cont<=this.ArrayEstadosDoRad.length;cont++){
        if(this.ArrayEstadosDoRad[cont].emailProfessor==this.email){
        this.ArrayEstadosDoRadPegar[cont]=this.ArrayEstadosDoRad[cont]
    
        
        if(this.ArrayEstadosDoRad[cont].aprovadoGeral==true){
          this.ArrayEstadosDoRadPegar[cont].aprovadoGeral="Aprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoGeral)
        } else{
          this.ArrayEstadosDoRadPegar[cont].aprovadoGeral="Reprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoGeral)
        }

        if(this.ArrayEstadosDoRad[cont].aprovadoDirecaoDeEnsino==true){
          this.ArrayEstadosDoRadPegar[cont].aprovadoDirecaoDeEnsino="Aprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoDirecaoDeEnsino)
        } else{
          this.ArrayEstadosDoRadPegar[cont].aprovadoDirecaoDeEnsino="Reprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoDirecaoDeEnsino)
        }
      
        if(this.ArrayEstadosDoRad[cont].aprovadoPesquisa==true){
          this.ArrayEstadosDoRadPegar[cont].aprovadoPesquisa="Aprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoPesquisa)
        } else{
          this.ArrayEstadosDoRadPegar[cont].aprovadoPesquisa="Reprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoPesquisa)
        }

        if(this.ArrayEstadosDoRad[cont].aprovadoExtensao==true){
          this.ArrayEstadosDoRadPegar[cont].aprovadoExtensao="Aprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoExtensao)
        } else{
          this.ArrayEstadosDoRadPegar[cont].aprovadoExtensao="Reprovado"
          console.log( this.ArrayEstadosDoRadPegar[cont].aprovadoExtensao)
        }
      
        console.log( this.ArrayEstadosDoRadPegar[cont])

      }

      
    }
    });
  }
  
statusfuncao(){
  
 

  
}
}
