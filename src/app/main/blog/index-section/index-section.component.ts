import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './../../core/services/modal.service';

@Component({
  selector: 'app-blog-index-section',
  templateUrl: './index-section.component.html',
  styleUrls: ['./index-section.component.scss']
})

export class IndexSectionComponent implements OnDestroy {

  constructor(
    public modalService: ModalService
  ) {}

  ngOnDestroy() {
    this.modalService.destroyDynamicComponent();
  }
  addContent() {
    this.modalService.addModal();
  }
}
