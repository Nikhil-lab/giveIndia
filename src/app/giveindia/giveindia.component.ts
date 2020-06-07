import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giveindia',
  templateUrl: './giveindia.component.html',
  styleUrls: ['./giveindia.component.css']
})
export class GiveindiaComponent implements OnInit {
  //  url = 'https://www.youtube.com/watch?v=da9gTKWIivA';
  url: string;
  youtubeLinks: string[] = []
  totalLinks;
  index = 0;
  id;
  playerVars = {
    cc_lang_pref: 'en'
  };
  player;
  ytEvent;

  constructor() { }

  ngOnInit(): void {
    this.id = 'LXb3EKWsInQ';
  }

  get_youtubeId() {

    this.id = this.url.split("v=")[1].substring(0, 11);
    this.youtubeLinks.push(this.id)
    console.log(this.youtubeLinks);
    this.url = "";
    this.totalLinks = this.youtubeLinks.length

    if(this.ytEvent ==0){
      this.check_youtube_list();
    }

  }


  onStateChange(event) {
    this.ytEvent = event.data;
    if (this.ytEvent == 0) {
      this.check_youtube_list();
    }
  }

  check_youtube_list() {
    if (this.index < this.totalLinks) {
      this.player.loadVideoById(this.youtubeLinks[this.index]);
      this.index++;
    }
  }

  deleteLink(index){
    this.youtubeLinks.splice(index, 1);
    this.totalLinks = this.youtubeLinks.length;
    this.index=0;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }



}
