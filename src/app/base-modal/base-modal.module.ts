import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseModalPageRoutingModule } from './base-modal-routing.module';

import { BaseModalPage } from './base-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseModalPageRoutingModule
  ],
  declarations: [BaseModalPage]
})
export class BaseModalPageModule {}
