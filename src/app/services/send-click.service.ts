/*
Curtis Kovacs
Last updated: 06/11/2021

The SendClickService creates a subject and debounces the click events emitted by 2 seconds.
*/

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SendClickService {
  private subject = new Subject<any>();

  sendClick() {
    this.subject.next();
  }

  onClick(): Observable<any> {
    return this.subject.pipe(debounceTime(2000));
  }

  constructor() {}
}
