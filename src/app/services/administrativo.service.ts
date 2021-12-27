import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Administrativo } from '../modelos/administrativo';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AdministrativoService {
periodo;
ano;
  administrativoCollection:AngularFirestoreCollection<Administrativo>;
  administrativo: Observable<Administrativo[]>;
  administrativoDoc: AngularFirestoreDocument<Administrativo>;
  constructor(public afs: AngularFirestore) {
    //this.atividadesCollection=this.afs.collection('atividades');
    this.administrativoCollection = this.afs.collection('administrativo', ref => ref.orderBy('nome','asc'));
  this.administrativo=this.afs.collection('administrativo').snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as Administrativo;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getAdministrativo(){
    return this.administrativo;
  }

  addAdministrativo(administrativo:Administrativo){
   this.administrativoCollection.add(administrativo);
  }
  deleteAdministrativo(administrativo:Administrativo){
     this.administrativoDoc=this.afs.doc(`administrativo/${administrativo.id}`);
     this.administrativoDoc.delete();
  }
  updateAdministrativo(administrativo:Administrativo){
    this.administrativoDoc=this.afs.doc(`administrativo/${administrativo.id}`);
    this.administrativoDoc.update(administrativo);
  }


}
