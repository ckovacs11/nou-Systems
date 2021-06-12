/*
Curtis Kovacs
Last updated: 06/11/2021

The ParentComponent is a smart component that subscribes to the observable created by the ChildComponent and the SendClickService it uses.
It then prints a message to the console as its subscribe callback.
*/

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendClickService } from 'src/app/services/send-click.service';

@Component({
  selector: 'app-parent',
  template: '<app-child></app-child>',
})
export class ParentComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private clickService: SendClickService) {
    this.subscription = clickService
      .onClick()
      .subscribe(() => console.log('Hello, nou Systems, Inc.!'));
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
