import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

import {Usuario} from '../modelos/Usuario';
import {UsuarioService} from '../services/usuario.service';
@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
 

  usuarios: Usuario[];

  usuario:Usuario={
    tipoDeUser:'',
    nome:'',
    email:'' ,
  senha :'' ,
  confirsenha : ''
  }
  constructor(private usuarioService: UsuarioService,public afAuth : AngularFireAuth) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(usuarios =>{
    // console.log(Usuario.email);
      this.usuarios=usuarios;
    });
  }

  

 async onSubmit(){
  if(this.usuario.nome!='' && this.usuario.tipoDeUser !='' && this.usuario.email !='' && this.usuario.senha !='' && this.usuario.confirsenha !='' ){
    const{usuario}= this
       if(usuario.senha !== usuario.confirsenha){
         
         return alert("As senhas não conferem");
       }
   try{
    const res = await this.afAuth.auth.createUserWithEmailAndPassword( usuario.email, usuario.senha);
    this.usuarioService.addUsuario(this.usuario);
    this.usuario.nome='';
    this.usuario.tipoDeUser='';
    this.usuario.email='';
    this.usuario.senha='';
    this.usuario.confirsenha='';

    console.log(res)
    alert("Usuário cadastrado com sucesso!");
   } catch (error) { 
      console.error(error); 
      return alert(error);
    }
  
  
  }}




  editState:boolean =false;
  usuarioToEdit: Usuario;


  deleteUsuario( event, usuario :Usuario){
    this.clearState();
    this.usuarioService.deleteUsuario(usuario);
}

editUsuario( event, usuario :Usuario){
this.editState=true;
this.usuarioToEdit=usuario;
}

clearState(){
  this.editState=false;
  this.usuarioToEdit=null;
}

updateUsuario(usuario :Usuario){

  if(this.usuario.nome!='' && this.usuario.tipoDeUser !='' && this.usuario.email !='' && this.usuario.senha !='' && this.usuario.confirsenha !='' ){
    const{usuario}= this
       if(usuario.senha !== usuario.confirsenha){
         
         return alert("As senhas não conferem");
       }
   try{

    this.usuarioService.updateUsuario(this.usuario);
    this.clearState();

 
    alert("Usuário editado com sucesso!");
   } catch (error) { 
      console.error(error); 
      return alert(error);
    }
  
  
  }


}



}


