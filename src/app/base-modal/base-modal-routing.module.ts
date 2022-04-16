import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseModalPage } from './base-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BaseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseModalPageRoutingModule {}
