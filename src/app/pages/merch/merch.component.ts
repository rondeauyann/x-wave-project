import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let thumbnails = document.getElementsByClassName('thumbnail');
    let activeImages = document.getElementsByClassName('active2');

    for (var i=0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('mouseover', function(){
        if (activeImages.length > 0){
          activeImages[0].classList.remove('active2');
        }

        this.classList.add('active2');
        (<HTMLImageElement>document.getElementById('featured')).src = this.src;
      })
    }
  }

}
