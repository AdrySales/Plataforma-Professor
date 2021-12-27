import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

import {UsuarioService} from '../services/usuario.service'
import { Usuario } from '../modelos/Usuario';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
   email: "";
   senha:"";
   emailUser:"";
   usuario : Usuario = {};
   user:Usuario[];
  constructor(public afAuth : AngularFireAuth, 
              public router:Router, public UsuarioService:UsuarioService){

  }
 ngOnInit() {
  
  }
 
  async login(){

    const{ email, senha }= this
       try{
       
    const res = await this.afAuth.auth.signInWithEmailAndPassword( email, senha);
   
    
  
      this.router.navigate([ '/quadroDeAvisos']);
    
      
   } catch (err) { 
      console.dir(err); 
      if(err.code==="auth/wrong-password"){
        return alert("Senha incorreta ou inválida!");
      }
      if(err.code==="auth/user-not-found"){
        return alert("Endereço de email incorreto,usuário não encontrado!");
      }
      if(err.code==="auth/argument-error"){
        return alert("Endereço de email em branco ou inválido!");
      }
      
    }
    
  }
 
  async  getuser(){
   
      const{email}= this
          try{
          
            this.UsuarioService.email=email;
            
            this.UsuarioService.pegarUser();
      } catch (err) { 
        console.log("deu erro")  ;
      }
         
    
   
  }
 

}
  