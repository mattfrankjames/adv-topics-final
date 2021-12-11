import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  slideOptions = {};
  stories: any[] = [];
  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];
  constructor(public socialSharing: SocialSharing) {}
  ngOnInit() {
    this.stories = [
      { name: 'New' },
      { name: 'Android', src: 'assets/imgs/circles/android.png' },
      { name: 'Angular', src: 'assets/imgs/circles/angular.png' },
      { name: 'Ionic', src: 'assets/imgs/circles/ionic.png' },
      { name: 'Nodejs', src: 'assets/imgs/circles/nodejs.png' },
      { name: 'Laravel', src: 'assets/imgs/circles/laravel.png' },
      { name: 'IOS', src: 'assets/imgs/circles/ios.png' },
      { name: 'Php', src: 'assets/imgs/circles/php.png' },
    ];
    this.slideOptions = {
      slidesPerView: this.checkScreen(),
    };
    this.buttonItems = [
      { value: 'grid', icon: 'grid' },
      { value: 'reels', icon: 'film' },
      { value: 'photos', icon: 'images' },
    ];
    this.posts = [
      { id: 1, url: 'assets/imgs/posts/1.jpg' },
      { id: 2, url: 'assets/imgs/posts/2.jpg' },
      { id: 3, url: 'assets/imgs/posts/3.png' },
      { id: 4, url: 'assets/imgs/posts/4.png' },
      { id: 9, url: 'assets/imgs/posts/5.jpg' },
      { id: 6, url: 'assets/imgs/posts/6.png' },
      { id: 5, url: 'assets/imgs/posts/7.png' },
      { id: 8, url: 'assets/imgs/posts/8.jpg' },
      { id: 7, url: 'assets/imgs/posts/9.png' },
      { id: 10, url: 'assets/imgs/posts/10.png' },
      { id: 11, url: 'assets/imgs/posts/11.png' },
      { id: 12, url: 'assets/imgs/posts/12.png' },
    ];
  }
  checkScreen() {
    const { innerWidth } = window;
    switch (true) {
      case innerWidth <= 400:
        return this.checkLength(5.5);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(6.5);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(7.5);
      default:
        return this.checkLength(9.5);
    }
  }
  checkLength(value) {
    const { length } = this.stories;
    return value < length ? value : length;
  }
  buttonsChanged(event) {
    this.buttonValue = event.detail.value;
  }
  shareItem(item, index) {
    console.log('sharing item - ', item, index);
    const message = 'Share this image';
    const subject = 'Shared with IonicGram';
    this.socialSharing
      .share(message, subject)
      .then(() => {
        console.log('Shared successfully');
      })
      .catch((error) => {
        console.error('error whil sharing', error);
      });
  }
}
