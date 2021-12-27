import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Aulas} from '../modelos/aulas';
import {EstadoDoPit} from '../modelos/estadoDoPit'
import {UsuarioService} from '../services/usuario.service';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EstadoDoPitService {
estados=[];
estado;
email=this.usuarioService.email;
emailParaCorrecao;
anoParaCorrecao;
periodoParaCorrecao;

estadoDoPitParaCorrecao:EstadoDoPit;

  estadoDoPitCollection:AngularFirestoreCollection<EstadoDoPit>;
  estadoDoPit: Observable<EstadoDoPit[]>;
  estadoDoPitDoc: AngularFirestoreDocument<EstadoDoPit>;
  constructor(public afs: AngularFirestore,public usuarioService:UsuarioService) {
    //this.aulas = this.afs.collection('aulas').valueChanges();
    this.estadoDoPitCollection = this.afs.collection('estadoDoPit', ref => ref.orderBy('nome','asc'));
    this.estadoDoPit=this.afs.collection('estadoDoPit').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data= a.payload.doc.data() as EstadoDoPit;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getEstadoDoPit(){
    return this.estadoDoPit;
  }
  addEstadoDoPit(estadoDoPit:EstadoDoPit){
      this.estadoDoPitCollection.add(estadoDoPit);
  }

  
   deleteEstadoDoPit(estadoDoPit:EstadoDoPit){
      this.estadoDoPitDoc=this.afs.doc(`estadoDoPit/${estadoDoPit.id}`);
      this.estadoDoPitDoc.delete();
   }
   updateEstadoDoPit(estadoDoPit:EstadoDoPit){
     this.estadoDoPitDoc=this.afs.doc(`aulas/${estadoDoPit.id}`);
     this.estadoDoPitDoc.update(estadoDoPit);
   }
 
   pegarEstado(){
 
        
  
    this.getEstadoDoPit().subscribe(estados =>{
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
    this.getEstadoDoPit().subscribe(estados =>{
      this.estados=estados;
      console.log("estados:"+this.estados)
   
      for(var cont=0;cont<=this.estados.length;cont++){
        console.log("estados:"+this.estados[cont])
        if(this.estados[cont].emailProfessor==this.emailParaCorrecao && this.estados[cont].ano==this.anoParaCorrecao && this.estados[cont].periodo==this.periodoParaCorrecao){
        
        this.estadoDoPitParaCorrecao=this.estados[cont];
       
        }
      }
    });
  
  }
}
