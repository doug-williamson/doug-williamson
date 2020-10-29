import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

export interface IJob {
  id: number;
  name: string;
  description: string;
  dates: string;
}

export interface IExperience {
  name: string;
  position: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  jobsCollection: AngularFirestoreCollection<IJob>;
  experienceDocument: AngularFirestoreDocument<IExperience>;

  constructor(private firestore: AngularFirestore) { }

  getJobs$(): Observable<IJob[]> {
    this.jobsCollection = this.firestore.collection<IJob>('jobs', ref => ref.orderBy('id', 'desc'));
  
    return this.jobsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IJob;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))); 
  }

  getExperience$(): Observable<IExperience> {
    this.experienceDocument = this.firestore.collection('experience').doc('LeCgw68Il49nG55EMbX7');

    return this.experienceDocument.valueChanges();
  }
}
