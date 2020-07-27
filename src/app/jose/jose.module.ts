import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JosePageRoutingModule } from './jose-routing.module';

import { JosePage } from './jose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JosePageRoutingModule
  ],
  declarations: [JosePage]
})
export class JosePageModule {}
