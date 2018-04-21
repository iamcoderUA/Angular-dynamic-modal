import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SharedModule } from './../../../shared/shared.module';
import { ModalService } from './../../../core/services/modal.service';

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
