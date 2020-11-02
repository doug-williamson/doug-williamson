import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService, IJobTag } from '../experience.service';

export enum ColorType {
  PRIMARY = 1,
  ACCENT = 2,
  NONE = 3
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  colorType: ColorType;

  @Input()
  jobId: string;

  jobTags: IJobTag[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getJobTags$(this.jobId).subscribe(res => {
      this.jobTags = res;
    })
  }

  getColorType(type: number) {
    switch(type) { 
      case ColorType.PRIMARY: { 
        return 'primary';
      } 
      case ColorType.ACCENT: { 
        return 'accent';
     } 
      default: { 
         return 'warn';
      } 
   } 
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
