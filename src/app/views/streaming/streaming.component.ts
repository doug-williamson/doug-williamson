import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IStreamingData } from './streaming';
import { StreamingService } from './streaming.service';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss'],
})
export class StreamingComponent implements OnInit {

  streamData: IStreamingData;
  video_url: SafeResourceUrl;
  chat_url: SafeResourceUrl;

  constructor(public media: MediaObserver, private streamingService: StreamingService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.streamingService.getStreamingData$().subscribe(res => {
      // change to collection for multi-dynasty collection
      this.streamData = res[0];
      console.log(this.streamData);

      this.video_url= this.sanitizer.bypassSecurityTrustResourceUrl(this.streamData.video_url);
      this.chat_url= this.sanitizer.bypassSecurityTrustResourceUrl(this.streamData.chat_url);
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
