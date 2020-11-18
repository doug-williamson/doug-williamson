import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../posts/post/post';
import { IDynastyWeek, IDynasty, IDynastyMark, IDynastyYear } from './dynasty/dynasty';

@Injectable({
  providedIn: 'root'
})
export class DynastiesService {

  dynastyCollection: AngularFirestoreCollection<IDynasty>;
  dynastyMarkCollection: AngularFirestoreCollection<IDynastyMark>;
  dynastyMarkYearsCollection: AngularFirestoreCollection<IDynastyYear>;
  dynastyMarkYearWeeksCollection: AngularFirestoreCollection<IDynastyWeek>;

  constructor(private firestore: AngularFirestore) {}

  getDynasties$():  Observable<IDynasty[]>{
    this.dynastyCollection = this.firestore.collection<IDynasty>('dynasties');

    return this.dynastyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynasty;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getDynastyMark$(): Observable<IDynastyMark[]>{
    this.dynastyMarkCollection = this.firestore.collection<IDynasty>('dynasties').doc('3WrQ17i2oOpnleoh7nWF').collection<IDynastyMark>('mark');
    
    return this.dynastyMarkCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyMark;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))); 
  }  

  getDynastyMarkYears$(): Observable<IDynastyYear[]> {
    this.dynastyMarkYearsCollection = this.firestore.collection<IDynasty>('dynasties').doc('3WrQ17i2oOpnleoh7nWF').collection<IDynastyMark>('mark').doc('6knwYblmlhEwUCHbOzfd').collection<IDynastyYear>('years');
    
    return this.dynastyMarkYearsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyYear;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))); 
  }

  getIDynastyWeeks$(): Observable<IDynastyWeek[]> {
    this.dynastyMarkYearWeeksCollection = this.firestore.collection<IDynasty>('dynasties').doc('3WrQ17i2oOpnleoh7nWF').collection<IDynastyMark>('mark').doc('6knwYblmlhEwUCHbOzfd').collection<IDynastyYear>('years').doc('odCZwgaiIYLfrdXaAfFm').collection<IDynastyWeek>('weeks', ref => ref.orderBy('week'));
  
    return this.dynastyMarkYearWeeksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyWeek;
        const id = a.payload.doc.id;

        if (data.ourScore > 0 || data.theirScore > 0) {
            data.result = (data.ourScore > data.theirScore) ? 'W' : 'L';
            data.description = 'Final Score: ' + data.ourScore + ' - ' + data.theirScore
        }

        return { id, ...data };
      }))); 
  }
  
}
