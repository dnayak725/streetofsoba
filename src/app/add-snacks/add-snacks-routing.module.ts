import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSnacksPage } from './add-snacks.page';

const routes: Routes = [
  {
    path: '',
    component: AddSnacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSnacksPageRoutingModule {}
