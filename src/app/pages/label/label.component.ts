import { Component, OnInit } from '@angular/core';

import { Podcast } from './../../models/podcast';
import { PodcastService } from './../../services/podcast.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  public podcasts1: Podcast[];

  constructor(public podcastService: PodcastService) { }

  ngOnInit(): void {
    this.podcasts1 = this.podcastService.getPodcastSaison1();
  }

}
