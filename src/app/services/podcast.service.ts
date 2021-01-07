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
    {id: 8, image: 'podcast8.PNG', nom: 'X-WAVE #8 - Ekkel', date: '25/07/2020'},
    {id: 9, image: 'podcast9.PNG', nom: 'X-WAVE #9 - OT2', date: '29/08/2020'},
    {id: 10, image: 'podcast10.PNG', nom: 'X-WAVE #10 - Pastwa', date: '26/09/2020'},
    {id: 11, image: 'podcast11.png', nom: 'X-WAVE #11 - Philipp Drube', date: '24/10/2020'},
    {id: 12, image: 'podcast12.png', nom: 'X-WAVE #12 - Goasis', date: '27/11/2020'},
  ];

  public podcasts2: Podcast[] = [
    {id: 13, image: 'podcast13.jpg', nom: 'X-WAVE #13 - I.E', date: '26/12/2020'},
  ];

  public podcastDetails1: PodcastDetail[] = [
    {
      id: 1,
      nom: 'X-WAVE #1 - Lasse Vind',
      date: '28/12/2019',
      imagePodcast: '/assets/img/podcast1.PNG',
      descriptionPodcast: 'Lasse Vind is a Copenhagen based DJ, member of the BunkerBauer crew. He\'s well known for his sharp selection of old trance and real dj skills. For this first chapter, he cooked one hour of psychedelic old goa trance, a show that goes perfectly for the X-Wave sounds.',
      imageArtiste: '/assets/img/lasseVind.jpg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/738841585&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 2,
      nom: 'X-WAVE #2 - Matriark',
      date: '25/01/2020',
      imagePodcast: '/assets/img/podcast2.PNG',
      descriptionPodcast: 'Born in Oslo, the Copenhagen based DJ Matriark, recently moved from floor to booth and plays regularly the great club Ved Siden Af. Matriark also helps run a collective called Agartha Productions that focuses on the visual aspect of the party as much as the sound. For the second X-Wave show of the decade, she delivers one hour of powerful psychedelic goa tunes...',
      imageArtiste: '/assets/img/matriark.JPG',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/750397672&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 3,
      nom: 'X-WAVE #3 - Blue Master',
      date: '29/02/2020',
      imagePodcast: '/assets/img/podcast3.PNG',
      descriptionPodcast: 'Norwegian duo from Oslo, Blue Master, is in the mix for the third X-Wave podcast.They deliver 1 hour of energetic psy-trance tunes from all decades. X-Wave takes care of the second part of the mix, with as usual old psy-trance and goa-trance mixed together.',
      imageArtiste: '/assets/img/blueMaster.jpg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/773773237&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 4,
      nom: 'X-WAVE #4 - Marius Bø',
      date: '28/03/2020',
      imagePodcast: '/assets/img/podcast4.PNG',
      descriptionPodcast: 'Marius Bø is one of the heads running the collective @ute-rec, a label and party series taking place in Oslo. His first hour mix taking you on a psychedelic journey, consisting of mostly old goa trance records. GTI takes care of the second hour, followed by DJ Sueur to finish the psychedelic containment journey...',
      imageArtiste: '/assets/img/mariusBo.jpg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/786924874&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&visual=true'
    },
    {
      id: 5,
      nom: 'X-WAVE #5 - Lund&Rønde',
      date: '25/04/2020',
      imagePodcast: '/assets/img/podcast5.PNG',
      descriptionPodcast: `Osvald and Aske Lund Rønde are a genius duo dj and producer from Copenhagen. They are running the infamous labels BunkerBauer and V.A.L.I.S. records and are known for their finest record collection and musical knowledge in Trance music. Their unique sound takes you to another dimension, and they prepared for us a non melodic goa mix with weird stuff from the back of the record collection. The 2 following hours are under GTI's and Dj Sueur's control.`,
      imageArtiste: '/assets/img/lund&rond.jpg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/808191931&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 6,
      nom: 'X-WAVE #6 - Opus Dream',
      date: '30/05/2020',
      imagePodcast: '/assets/img/podcast6.PNG',
      descriptionPodcast: `Opus Dream recently made his DJ debut in December of 2019. Hailing from Krakow, he has been a longtime member of the city's dance music scene before moving behind the decks. He has steadily carved a name for himself in the trance music community having made his debut alongside DJs like High Future and Tahl. He is also a resident of the young Krakow-based collective Nasenbluten.`,
      imageArtiste: '/assets/img/opusDream.jpg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/833860762&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 7,
      nom: 'X-WAVE #7 - Jaïa',
      date: '27/06/2020',
      imagePodcast: '/assets/img/podcast7.PNG',
      descriptionPodcast: `Jaia project was first formed in 1995 by Yannis and Jean-Michel Blanchet. They released their first tracks on Fairway Records, and Jaia became quickly one of the main goa trance band in the 90ies. Since 1997 Jaia has been performing live in festivals, clubs, and art galleries in all Europe, Japan, Israel, Russia, India, Brazil, Mexico, Canada and in the USA. Since 2000 Yannis is working alone under Jaia name, and his music goes now from atmospheric cinematic ambient to uplifting trance, crossing house and techno grooves.`,
      imageArtiste: '/assets/img/jaia.jpg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/850260604&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 8,
      nom: 'X-WAVE #8 - Ekkel',
      date: '25/07/2020',
      imagePodcast: '/assets/img/podcast8.PNG',
      descriptionPodcast: `Ekkel is one of the guys behind the norwegian crew, Ute, based in Oslo, and runs labels (Sinensis, Translusid, Ute), parties, and podcast series. He's also the head behind Accelerationism (genius dj-duo with Marius Bø). His special taste for very sexy old school trance records will certainly charm you. Enjoy the trip.`,
      imageArtiste: '',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/876281146&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 9,
      nom: 'X-WAVE #9 - OT2',
      date: '29/08/2020',
      imagePodcast: '/assets/img/podcast9.PNG',
      descriptionPodcast: `OT2 is a Norwegian-born, Berlin residing producer who’s music can be found on various labels (Sunlab, Valis (upcoming), Ute and Translusid). His DJ-sets spans a diverse range of genres and BPMs with a focus on trancier grooves and melodies.`,
      imageArtiste: '/assets/img/OT2.jpg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/889216498&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 10,
      nom: 'X-WAVE #10 - Pastwa',
      date: '26/09/2020',
      imagePodcast: '/assets/img/podcast10.PNG',
      descriptionPodcast: `Pastwa is 1/3 of the Kraków based NIC collective, which is known for pushing the darker, industrial sonic range of techno. Pastwa is also co-founder of the party series Nasenbluten which has already drawn attention from cities such as Copenhagen and Berlin. Nasenbluten focuses on hard trance and fast techno, and is pushing boundaries within the Polish underground. Pastwa is well-known in Kraków but she already had a chance to play internationally - in Ved Siden Af in Copenhagen and Das Werk in Vienna.`,
      imageArtiste: '/assets/img/pastwa.jpeg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/906204529&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 11,
      nom: 'X-WAVE #11 - Philipp Drube',
      date: '24/10/2020',
      imagePodcast: '/assets/img/podcast11.png',
      descriptionPodcast: `Philipp Drube is a Berlin based DJ and labelhead. His meticulous and hand-tailored sets focus on Hard Dance music: Trance, fast paced Techno and Hardcore. A blend which earns him appearances at Berlin’s most established venues such as Griessmühle, Säule/Berghain, About Blank, Tresor as well as ongoing international bookings. In 2019 he co-founded Space Trax, a label which further highlights his musical vision and includes releases from artists such as Héctor Oaks, Lund&Rønde or Dimensionhopper aka Schacke. He cooked something more psy and goa than usual for the 11th show of X-Wave series.`,
      imageArtiste: '/assets/img/philippDrube.jpeg',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/918257828&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 12,
      nom: 'X-WAVE #12 - Goasis',
      date: '27/11/2020',
      imagePodcast: '/assets/img/podcast12.png',
      descriptionPodcast: `Previously based in Melbourne, Grant Camov has been an important part of the Australian scene for the last decade, playing almost every event there is to play under different aliases. As Goasis he was a key figure in the Australian underground scene and after deeply exploring the sonic boundaries of electronic music the psychedelic sound caught his attention for real. Enjoy this most recent Goa mix, cooked up with pleasure for X-Wave`,
      imageArtiste: '',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/947342959&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      id: 13,
      nom: 'X-WAVE #13 - I.E',
      date: '26/12/2020',
      imagePodcast: '/assets/img/podcast13.jpg',
      descriptionPodcast: ``,
      imageArtiste: '',
      descriptionArtiste: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam excepturi voluptas iure optio, delectus soluta? Ut, tempore laboriosam odit eos animi hic perferendis esse fugit, nihil ipsa ex ducimus?',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/958170400&color=%23111718&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
  ];

  public podcastDetails2: PodcastDetail[] = [

  ];


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
