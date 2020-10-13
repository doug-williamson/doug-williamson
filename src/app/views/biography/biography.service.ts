import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BiographyService {

  constructor(private firestore: AngularFirestore) { }

  getBiography() {
    return this.firestore.collection('biography').snapshotChanges();
  }
}
