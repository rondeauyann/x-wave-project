import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

import { Podcast } from './../../models/podcast';
import { PodcastService } from './../../services/podcast.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  public podcasts1: Podcast[];

  public podcasts2: Podcast[];

  constructor(public router: Router, public podcastService: PodcastService) { }

  ngOnInit() {
    this.podcasts1 = this.podcastService.getPodcastSaison1();
    this.podcasts2 = this.podcastService.getPodcastSaison2();

    $('#saison1').click(function(){
      $('#podcasts1').toggle();
      $("i", this).toggleClass("fa-arrow-right fa-arrow-down");
    });
  }

}
