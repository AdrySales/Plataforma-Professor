import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Atividade } from '../modelos/atividade';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  


  atividadesCollection:AngularFirestoreCollection<Atividade>;
  atividades: Observable<Atividade[]>;
  atividadeDoc: AngularFirestoreDocument<Atividade>;
  constructor(public afs: AngularFirestore) {
    //this.atividadesCollection=this.afs.collection('atividades');
    this.atividadesCollection = this.afs.collection('atividades', ref => ref.orderBy('nome','asc'));

    
  this.atividades=this.atividadesCollection.snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as Atividade;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getAtividades(){
    
    return this.atividades;
  }

  addAtividade(atividade:Atividade){
   this.atividadesCollection.add(atividade);
  }
  deleteAtividade(atividade:Atividade){
     this.atividadeDoc=this.afs.doc(`atividades/${atividade.id}`);
     this.atividadeDoc.delete();
  }
  updateAtividade(atividade:Atividade){
    this.atividadeDoc=this.afs.doc(`atividades/${atividade.id}`);
    this.atividadeDoc.update(atividade);
  }


  
}

