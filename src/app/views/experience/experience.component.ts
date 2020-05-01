import { Component, OnInit } from '@angular/core';
import { Experience, Job } from './experience';
import { MediaObserver } from '@angular/flex-layout';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  step = 0;
  _experience: Experience;
  _jobs: Job[];

  constructor(public media: MediaObserver, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.getExperience().subscribe(data => {
      this._experience = data.data() as Experience;
    });

    this.getJobs().subscribe(data => {
      this._jobs = data.map(e => {
        return { id: e.payload.doc.id,
          ...e.payload.doc.data() as Job }
      });
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  getExperience() {
    return this.firestore.collection('experience').doc('LeCgw68Il49nG55EMbX7').get();
  }
  
  getJobs() {
    return this.firestore.collection('jobs').snapshotChanges();
  }
}
