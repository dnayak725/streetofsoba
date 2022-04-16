import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinningLocationPageRoutingModule } from './dinning-location-routing.module';

import { DinningLocationPage } from './dinning-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinningLocationPageRoutingModule
  ],
  declarations: [DinningLocationPage]
})
export class DinningLocationPageModule {}
