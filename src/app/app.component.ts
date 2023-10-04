import { Component } from '@angular/core';
import { WishItem } from 'src/shared/modals/wishItem';
import events from '../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Typscript', true),
    new WishItem('Learn Github')
  ];

  constructor() {
    events.listen('removeWish', (wish : any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }
  filter: any; 
}
