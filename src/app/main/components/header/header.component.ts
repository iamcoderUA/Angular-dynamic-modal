import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ModalService } from './../../core/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  router;
  navItems: { name: string, path: string }[];

  constructor(
    public modalService: ModalService,
    private _router: Router
  ) { this.router = _router; }

  ngOnInit() {

    this.navItems = [
      {name: 'Home', path: '/'},
      {name: 'Blog', path: '/blog'},
      {name: 'About', path: '/about'},
      {name: 'Contacts', path: '/contacts'},
    ];

    for (const navItem of this.navItems) {
      if (navItem.path === this.router.url ) {
        this.modalService.dynamicContent = navItem.name;
      }
    }
  }
  sendPageName(value) {
    this.modalService.dynamicContent = value;
  }
}
