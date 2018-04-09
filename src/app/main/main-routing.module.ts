import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', loadChildren: './home/home.module#HomeModule'},
      {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
      {path: 'about', loadChildren: './about/about.module#AboutModule'},
      {path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule'},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(MainRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class MainRoutingModule { }
