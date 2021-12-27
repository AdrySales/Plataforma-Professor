import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import {Periodo} from '../modelos/periodo';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
ano;
periodoPeriodo;
  periodoCollection:AngularFirestoreCollection<Periodo>;
  periodo: Observable<Periodo[]>;
  periodoDoc: AngularFirestoreDocument<Periodo>;
  constructor(public afs: AngularFirestore) {
    //this.atividadesCollection=this.afs.collection('atividades');
    this.periodoCollection = this.afs.collection('periodo', ref => ref.orderBy('nome','asc'));
  this.periodo=this.afs.collection('periodo').snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as Periodo;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getPeriodo(){
    return this.periodo;
  }

  addPeriodo(periodo:Periodo){
   this.periodoCollection.add(periodo);
  }
  deletePeriodo(periodo:Periodo){
     this.periodoDoc=this.afs.doc(`periodo/${periodo.id}`);
     this.periodoDoc.delete();
  }
  updatePeriodo(periodo:Periodo){
    this.periodoDoc=this.afs.doc(`periodo/${periodo.id}`);
    this.periodoDoc.update(periodo);
  }


}
