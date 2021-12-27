import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Extensao } from '../modelos/extensao';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ExtensaoService {
  periodo;
  ano;

  extensaoCollection:AngularFirestoreCollection<Extensao>;
  extensao: Observable<Extensao[]>;
  extensaoDoc: AngularFirestoreDocument<Extensao>;
  constructor(public afs: AngularFirestore) {
    //this.atividadesCollection=this.afs.collection('atividades');
    this.extensaoCollection = this.afs.collection('extensao', ref => ref.orderBy('nome','asc'));
  this.extensao=this.afs.collection('extensao').snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as Extensao;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getExtensao(){
    return this.extensao;
  }

  addExtensao(extensao:Extensao){
   this.extensaoCollection.add(extensao);
  }
  deleteExtensao(extensao:Extensao){
     this.extensaoDoc=this.afs.doc(`extensao/${extensao.id}`);
     this.extensaoDoc.delete();
  }
  updateExtensao(extensao:Extensao){
    this.extensaoDoc=this.afs.doc(`extensao/${extensao.id}`);
    this.extensaoDoc.update(extensao);
  }

 


}
