/*
Curtis Kovacs
Last updated: 06/11/2021

The NouSystemsModule contains the ParentComponent and ChildComponent components.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [{ path: '', component: ParentComponent }];

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [ParentComponent, ChildComponent],
})
export class NouSystemsModule {}
