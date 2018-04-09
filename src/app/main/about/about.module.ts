import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexSectionModule } from './index-section/index-section.module';

import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    SharedModule,
    AboutRoutingModule,
    IndexSectionModule
    ],

})

export class AboutModule { }
