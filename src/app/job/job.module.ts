import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobPageRoutingModule } from './job-routing.module';

import { JobPage } from './job.page';
import {PlaceBidPageModule} from '../place-bid/place-bid.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobPageRoutingModule,
    PlaceBidPageModule
  ],
  declarations: [JobPage]
})
export class JobPageModule {}
