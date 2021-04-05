import { Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { Location } from '@angular/common';

import { Podcast } from '../../models/podcast';
import { PodcastService } from '../../services/podcast.service';
import { PodcastDetail } from './../../models/podcast-detail';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss']
})
export class PodcastDetailComponent implements OnInit, OnDestroy {

  public id: number;
  public podcastDetail: PodcastDetail;

  constructor(public podcastService: PodcastService,
              public route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private location: Location) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.podcastDetail = this.podcastService.getPodcastDetail(this.id);
    document.getElementById('tab-podcast').classList.add('active');

    $('img[data-enlargeable]').addClass('img-enlargeable').click(function(){
      var src = $(this).attr('src');
      var modal;
      function removeModal(){ modal.remove(); $('body').off('keyup.modal-close'); }
      modal = $('<div>').css({
          background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
          backgroundSize: 'contain',
          width:'100%', height:'100%',
          position:'fixed',
          zIndex:'10000',
          top:'0', left:'0',
          cursor: 'zoom-out'
      }).click(function(){
          removeModal();
      }).appendTo('body');
      //handling ESC
      $('body').on('keyup.modal-close', function(e){
        if(e.key==='Escape'){ removeModal(); }
      });
  });
  }

  getSoundcloudUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.podcastDetail.soundcloudUrl);
  }


  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    document.getElementById('tab-podcast').classList.remove('active');
  }
}
