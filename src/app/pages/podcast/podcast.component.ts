import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    $('#saison1').click(function(){
      $('#podcasts1').toggle();
    });
  }

}
