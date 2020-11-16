import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStreamingData } from './streaming';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  streamDataCollection: AngularFirestoreCollection<IStreamingData>;

  constructor(private firestore: AngularFirestore) { }

  getStreamingData$():  Observable<IStreamingData[]>{
    this.streamDataCollection = this.firestore.collection<IStreamingData>('streaming');

    return this.streamDataCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IStreamingData;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }
}
