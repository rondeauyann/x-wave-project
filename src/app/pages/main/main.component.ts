import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('load', function(){
      let newVideo = <HTMLVideoElement> document.getElementById("video");
      newVideo.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
      }, false);

      newVideo.muted = true;
      newVideo.play();

  });
  }

}
