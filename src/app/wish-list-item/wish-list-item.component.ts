import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/modals/wishItem';
import events from './../../shared/services/EventService';


@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {
  @Input() wish! : WishItem;

  get cssClasses() {
    return {'strikeout text-muted': this.wish.isComplete};
  }
  constructor() { }

  ngOnInit(): void {
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

}
