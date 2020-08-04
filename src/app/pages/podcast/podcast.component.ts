import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Podcast } from './../../models/podcast';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  public podcasts1: Podcast[] = [
    {id: 1, image: 'podcast1.PNG', nom: 'X-WAVE #1 - Lasse Vind - 28/12/2019'},
    {id: 1, image: 'podcast2.PNG', nom: 'X-WAVE #2 - Matriark - 25/01/2020'},
    {id: 1, image: 'podcast3.PNG', nom: 'X-WAVE #3 - Blue Master - 29/02/2020'},
    {id: 1, image: 'podcast4.PNG', nom: 'X-WAVE #4 - Marius Bø - 28/03/2020'},
    {id: 1, image: 'podcast5.PNG', nom: 'X-WAVE #5 - Lund&Rønde - 25/04/2020'},
    {id: 1, image: 'podcast6.PNG', nom: 'X-WAVE #6 - Opus Dream - 30/05/2020'},
    {id: 1, image: 'podcast7.PNG', nom: 'X-WAVE #7 - Jaïa - 27/06/2020'},

  ];

  public podcasts2: Podcast[] = [];

  constructor() { }

  ngOnInit() {
    $('#saison1').click(function(){
      $('#podcasts1').toggle();
    });
  }

}
