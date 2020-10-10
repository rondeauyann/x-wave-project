import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Podcast } from './../models/podcast';
import { PodcastDetail } from './../models/podcast-detail';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {

  public podcasts1: Podcast[] = [
    {id: 1, image: 'podcast1.PNG', nom: 'X-WAVE #1 - Lasse Vind', date: '28/12/2019'},
    {id: 2, image: 'podcast2.PNG', nom: 'X-WAVE #2 - Matriark', date: '25/01/2020'},
    {id: 3, image: 'podcast3.PNG', nom: 'X-WAVE #3 - Blue Master', date: '29/02/2020'},
    {id: 4, image: 'podcast4.PNG', nom: 'X-WAVE #4 - Marius Bø ', date: '28/03/2020'},
    {id: 5, image: 'podcast5.PNG', nom: 'X-WAVE #5 - Lund&Rønde', date: ' 25/04/2020'},
    {id: 6, image: 'podcast6.PNG', nom: 'X-WAVE #6 - Opus Dream', date: '30/05/2020'},
    {id: 7, image: 'podcast7.PNG', nom: 'X-WAVE #7 - Jaïa', date: '27/06/2020'},
  ];

  public podcastDetails1: PodcastDetail[] = [
    {
      id: 1,
      nom: 'X-WAVE #1 - Lasse Vind - 28/12/2019',
      imagePodcast: '/assets/img/podcast1.PNG',
      descriptionPodcast: 'Lasse Vind is a Copenhagen based DJ, member of the BunkerBauer crew. He\'s well known for his sharp selection of old trance and real dj skills. For this first chapter, he cooked one hour of psychedelic old goa trance, a show that goes perfectly for the X-Wave sounds.',
      imageArtiste: '',
      descriptionArtiste: '',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/738841585&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    }
  ];

  public podcasts2: Podcast[] = [];

  constructor() { }

  getPodcastSaison1(): Podcast[] {
    return this.podcasts1;
  }

  getPodcastSaison2(): Podcast[] {
    return this.podcasts2;
  }

  getPodcastDetail(id: number): PodcastDetail {
    return this.podcastDetails1.find(podcast => podcast.id === id);
  }

}
