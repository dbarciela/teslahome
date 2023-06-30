import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from '../model/link';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'link-card',
    templateUrl: './link-card.component.html',
    styleUrls: ['./link-card.component.scss'],
    standalone: true,
    imports: [NgIf, MatButtonModule, MatIconModule]
})
export class LinkCardComponent  implements OnInit{

  @Input('link')
  link: Link | undefined ;
  
  @Output()
  onFullscreen = new EventEmitter<string>();

  @Output()
  onOpen = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  fullscreen() {
    if(this.link)
    this.onFullscreen.emit(this.link.url);
  }

  open() {
    if(this.link)
    this.onOpen.emit(this.link.url);
  }
}
