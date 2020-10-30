import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ILatestNews {
  timestamp: Date,
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {

  LatestNewsCollection: AngularFirestoreCollection<ILatestNews>;

  constructor(private firestore: AngularFirestore) { }

  getLatestNews$(): Observable<ILatestNews[]> {
    this.LatestNewsCollection = this.firestore.collection<ILatestNews>('latest-news', ref => ref.orderBy('timestamp', 'desc'));
  
    return this.LatestNewsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ILatestNews;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))); 
  }
}
