/*
Curtis Kovacs
Last updated: 06/11/2021

ChildComponent is a dumb component that uses the SendClickService to send a click event to any listening subscribers.
*/

import { Component, OnInit } from '@angular/core';
import { SendClickService } from 'src/app/services/send-click.service';

@Component({
  selector: 'app-child',
  template:
    '<button class="btn btn-primary" (click)="handleClick()">Click!</button>',
})
export class ChildComponent implements OnInit {
  constructor(private clickService: SendClickService) {}

  ngOnInit() {}

  handleClick(): void {
    this.clickService.sendClick();
  }
}
