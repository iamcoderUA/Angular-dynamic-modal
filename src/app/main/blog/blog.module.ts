import { NgModule } from '@angular/core';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

import { IndexSectionModule } from './index-section/index-section.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    BlogRoutingModule,
    IndexSectionModule
  ],
})

export class BlogModule { }
