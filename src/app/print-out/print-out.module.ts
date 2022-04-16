import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintOutPageRoutingModule } from './print-out-routing.module';

import { PrintOutPage } from './print-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintOutPageRoutingModule
  ],
  declarations: [PrintOutPage]
})
export class PrintOutPageModule {}
