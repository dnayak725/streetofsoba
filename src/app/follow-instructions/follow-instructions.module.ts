import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowInstructionsPageRoutingModule } from './follow-instructions-routing.module';

import { FollowInstructionsPage } from './follow-instructions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowInstructionsPageRoutingModule
  ],
  declarations: [FollowInstructionsPage]
})
export class FollowInstructionsPageModule {}
