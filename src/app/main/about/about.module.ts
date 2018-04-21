import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

import { IndexSectionModule } from './index-section/index-section.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    SharedModule,
    AboutRoutingModule,
    IndexSectionModule
    ],

})

export class AboutModule { }
