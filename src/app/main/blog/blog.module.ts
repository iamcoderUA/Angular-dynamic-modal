import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { IndexSectionModule } from './index-section/index-section.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    BlogRoutingModule,
    IndexSectionModule
  ],
})

export class BlogModule { }
