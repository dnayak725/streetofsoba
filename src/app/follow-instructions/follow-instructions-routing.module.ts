import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowInstructionsPage } from './follow-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: FollowInstructionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowInstructionsPageRoutingModule {}
