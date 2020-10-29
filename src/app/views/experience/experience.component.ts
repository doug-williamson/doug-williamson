import { Component, OnInit } from '@angular/core';
import { Experience, Job } from './experience';
import { MediaObserver } from '@angular/flex-layout';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ExperienceService, IExperience, IJob } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  step = 0;
  experience: IExperience;
  jobs: IJob[];

  constructor(public media: MediaObserver, private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experienceService.getExperience$().subscribe(res => {
      console.log(res);
      this.experience = res;
    });

    this.experienceService.getJobs$().subscribe(res => {
      console.log(res);
      this.jobs = res;
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
