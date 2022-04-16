import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSnacksPageRoutingModule } from './add-snacks-routing.module';

import { AddSnacksPage } from './add-snacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSnacksPageRoutingModule
  ],
  declarations: [AddSnacksPage]
})
export class AddSnacksPageModule {}
