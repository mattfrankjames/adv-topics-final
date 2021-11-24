import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @ViewChild(IonSlides) ionSlides: IonSlides;
  slideOptions: any = {};
  slides: any = [];
  activities: any = [];
  activeTab = 0;
  constructor() {}
  ngOnInit() {
    this.slides = [
      {
        id: 1,
        name: 'All Activity',
      },
      {
        id: 2,
        name: 'Likes',
        notifications: 32,
      },
      {
        id: 3,
        name: 'Comments',
        notifications: 13,
      },
      {
        id: 4,
        name: 'Mentions',
      },
    ];
    this.slideOptions = {
      slidesPerView: this.checkScreen(),
    };
    this.activities = [
      {
        id: 1,
        username: 'joaovitor_rss',
        userProfile: 'assets/imgs/2.png',
        time: '1 min',
        activity: 'follow',
      },
      {
        id: 2,
        username: 'erickmiller',
        userProfile: 'assets/imgs/6.png',
        time: '5 mins',
        activity: 'comment',
        comments: 'Great content without a doubt. I am your big fan of you.',
        post: 'assets/imgs/posts/12.png',
      },
      {
        id: 3,
        username: 'dlv_n',
        userProfile: 'assets/imgs/4.png',
        time: '1d',
        activity: 'follow',
      },
      {
        id: 4,
        username: 'nikita.chaurasia.14',
        userProfile: 'assets/imgs/3.png',
        time: '1w',
        activity: 'follow',
      },
      {
        id: 5,
        username: 'iq.code',
        userProfile: 'assets/imgs/5.png',
        time: '5 mins',
        activity: 'comment',
        comments:
          "Nice design. It's good to see different layouts and design for such commons elements. Good job!.",
        post: 'assets/imgs/posts/11.png',
      },
      {
        id: 6,
        username: 'er_vinodbhargav',
        userProfile: 'assets/imgs/1.png',
        time: '3w',
        activity: 'follow',
      },
    ];
  }
  checkLength(value) {
    const { length } = this.slides;
    return value < length ? value : length;
  }
  checkScreen() {
    const { innerWidth } = window;
    switch (true) {
      case innerWidth <= 400:
        return this.checkLength(3.6);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(4.6);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(5.6);
      default:
        return this.checkLength(6.6);
    }
  }

  changeTab(index) {
    this.activeTab = index;
    this.ionSlides.slideTo(index);
  }
  likeComment(item) {
    item.like = !item.like;
  }
}
