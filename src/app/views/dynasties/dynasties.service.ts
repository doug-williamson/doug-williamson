import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../posts/post/post';
import { IDynasty, IDynastyMark, IDynastyWeek, IDynastyYear } from './dynasty/dynasty';

@Injectable({
  providedIn: 'root'
})
export class DynastiesService {

  dynastyCollection: AngularFirestoreCollection<IDynasty>;
  dynastyMarkCollection: AngularFirestoreCollection<IDynastyMark>;
  dynastyMarkYearsCollection: AngularFirestoreCollection<IDynastyYear>;
  dynastyMarkYearWeeksColleciton: AngularFirestoreCollection<IDynastyWeek>;

  constructor(private firestore: AngularFirestore) {}

  getDynasties$():  Observable<IDynasty[]>{
    this.dynastyCollection = this.firestore.collection<IDynasty>('dynasties');

    return this.dynastyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        console.log(a.payload.doc.id);
        console.log(a.payload.doc.data());
        const data = a.payload.doc.data() as IDynasty;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getDynastyMark$(dynastyId: number): Observable<IDynastyMark[]>{
    this.dynastyMarkCollection = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId.toString()).collection<IDynastyMark>('mark');
    
    return this.dynastyMarkCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        console.log(a.payload.doc.id);
        console.log(a.payload.doc.data());
        const data = a.payload.doc.data() as IDynastyMark;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))); 
  }  

  getDynastyMarkYears$(dynastyId: string, markId: string): Observable<IDynastyYear[]> {
    this.dynastyMarkYearsCollection = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId).collection<IDynastyMark>('mark').doc(markId).collection<IDynastyYear>('years');
    
    return this.dynastyMarkYearsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        console.log(a.payload.doc.id);
        console.log(a.payload.doc.data());
        const data = a.payload.doc.data() as IDynastyYear;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))); 
  }

  getDynastyWeeks$(dynastyId: string, markId: string, yearId: string): Observable<IDynastyWeek[]> {
    this.dynastyMarkYearWeeksColleciton = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId).collection<IDynastyMark>('mark').doc(markId).collection<IDynastyYear>('years').doc(yearId).collection<IDynastyWeek>('weeks');
  
    return this.dynastyMarkYearWeeksColleciton.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        console.log(a.payload.doc.id);
        console.log(a.payload.doc.data());
        const data = a.payload.doc.data() as IDynastyWeek;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))); 
  }
  
}
