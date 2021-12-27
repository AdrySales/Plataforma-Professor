import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Pesquisa } from '../modelos/pesquisa';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  periodo;
  ano;
  pesquisaCollection:AngularFirestoreCollection<Pesquisa>;
  pesquisa: Observable<Pesquisa[]>;
  pesquisaDoc: AngularFirestoreDocument<Pesquisa>;
  constructor(public afs: AngularFirestore) {
    //this.atividadesCollection=this.afs.collection('atividades');
    this.pesquisaCollection = this.afs.collection('pesquisa', ref => ref.orderBy('nome','asc'));
  this.pesquisa=this.afs.collection('pesquisa').snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as Pesquisa;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getPesquisa(){
    return this.pesquisa;
  }

  addPesquisa(pesquisa:Pesquisa){
   this.pesquisaCollection.add(pesquisa);
  }
  deletePesquisa(pesquisa:Pesquisa){
     this.pesquisaDoc=this.afs.doc(`pesquisa/${pesquisa.id}`);
     this.pesquisaDoc.delete();
  }
  updatePesquisa(pesquisa:Pesquisa){
    this.pesquisaDoc=this.afs.doc(`pesquisa/${pesquisa.id}`);
    this.pesquisaDoc.update(pesquisa);
  }


}
