import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import { Podcast } from '../../models/podcast';
import { PodcastService } from '../../services/podcast.service';
import { PodcastDetail } from './../../models/podcast-detail';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss']
})
export class PodcastDetailComponent implements OnInit {

  public id: number;
  public podcastDetail: PodcastDetail;

  constructor(public podcastService: PodcastService,
              public route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.podcastDetail = this.podcastService.getPodcastDetail(this.id);
    console.log(this.podcastDetail);
  }

  getSoundcloudUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.podcastDetail.soundcloudUrl);
  }

}
