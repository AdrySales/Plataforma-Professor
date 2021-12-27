import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {ComponenteCurricular} from '../modelos/componenteCurricular';

@Injectable({
  providedIn: 'root'
})
export class ComponenteCurricularService {

  componenteCurricularCollection:AngularFirestoreCollection<ComponenteCurricular>;
  componenteCurricular: Observable<ComponenteCurricular[]>;
  componenteCurricularDoc: AngularFirestoreDocument<ComponenteCurricular>;
  constructor(public afs: AngularFirestore) {
    this.componenteCurricularCollection = this.afs.collection('componenteCurricular', ref => ref.orderBy('nome','asc'));
  this.componenteCurricular=this.afs.collection('componenteCurricular').snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as ComponenteCurricular;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getComponenteCurricular(){
    return this.componenteCurricular;
  }

  addComponenteCurricular(componenteCurricular:ComponenteCurricular){
   this.componenteCurricularCollection.add(componenteCurricular);
  }
  deleteComponenteCurricular(componenteCurricular:ComponenteCurricular){
     this.componenteCurricularDoc=this.afs.doc(`componenteCurricular/${componenteCurricular.id}`);
     this.componenteCurricularDoc.delete();
  }
  updateComponenteCurricular(componenteCurricular:ComponenteCurricular){
    this.componenteCurricularDoc=this.afs.doc(`cursos/${componenteCurricular.id}`);
    this.componenteCurricularDoc.update(componenteCurricular);
  }

 
}

  