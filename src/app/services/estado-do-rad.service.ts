import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Aulas} from '../modelos/aulas';
import {EstadoDoRad} from '../modelos/estadoDoRad'
import {UsuarioService} from '../services/usuario.service';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstadoDoRadService {
  estados=[];
  estado;
  email=this.usuarioService.email;
  emailParaCorrecao;
  estadoDoRadParaCorrecao;
  anoParaCorrecao;
periodoParaCorrecao;
  estadoDoRadCollection:AngularFirestoreCollection<EstadoDoRad>;
  estadoDoRad: Observable<EstadoDoRad[]>;
  estadoDoRadDoc: AngularFirestoreDocument<EstadoDoRad>;
  constructor(public afs: AngularFirestore,public usuarioService:UsuarioService) {
    //this.aulas = this.afs.collection('aulas').valueChanges();
    this.estadoDoRadCollection = this.afs.collection('estadoDoRad', ref => ref.orderBy('nome','asc'));
    this.estadoDoRad=this.afs.collection('estadoDoRad').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data= a.payload.doc.data() as EstadoDoRad;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getEstadoDoRad(){
    return this.estadoDoRad;
  }
  addEstadoDoRad(estadoDoRad:EstadoDoRad){
      this.estadoDoRadCollection.add(estadoDoRad);
  }

  
   deleteEstadoDoRad(estadoDoRad:EstadoDoRad){
      this.estadoDoRadDoc=this.afs.doc(`estadoDoRad/${estadoDoRad.id}`);
      this.estadoDoRadDoc.delete();
   }
   updateEstadoDoRad(estadoDoRad:EstadoDoRad){
     this.estadoDoRadDoc=this.afs.doc(`estadoDoRad/${estadoDoRad.id}`);
     this.estadoDoRadDoc.update(estadoDoRad);
   }
   pegarEstado(){
 
        
  
    this.getEstadoDoRad().subscribe(estados =>{
    this.estados=estados;

  for(var cont=0;cont<=this.estados.length;cont++){
  
    if(this.estados[cont].emailProfessor==this.email){ 
 
     this.estado=true;
    }
  this.estado=false;
}
    
   });   
  }
  
  estadoPegar(){
    this.getEstadoDoRad().subscribe(estados =>{
      this.estados=estados;
      console.log("estados:"+this.estados)
   
      for(var cont=0;cont<=this.estados.length;cont++){
        console.log("estados:"+this.estados[cont])
        if(this.estados[cont].emailProfessor==this.emailParaCorrecao && this.estados[cont].ano==this.anoParaCorrecao && this.estados[cont].periodo==this.periodoParaCorrecao){
        
        this.estadoDoRadParaCorrecao=this.estados[cont];
       
        }
      }
    });
  
  }
    
  
}
