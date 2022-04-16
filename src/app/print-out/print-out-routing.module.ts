import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintOutPage } from './print-out.page';

const routes: Routes = [
  {
    path: '',
    component: PrintOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintOutPageRoutingModule {}
