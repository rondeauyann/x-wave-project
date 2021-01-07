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

    $('#podcasts2').hide();

    $('.saison').click(function(){
      $('.target').hide();
      $('#podcasts'+$(this).attr('target')).show();
    });
  }

}
