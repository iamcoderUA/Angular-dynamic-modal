import { OnInit, Component, ViewChild, ViewContainerRef } from '@angular/core';

import { ModalBoxComponent } from '../core/modal-box/modal-box.component';
import { ModalService } from '../core/services/modal.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('dynamicTemplate', { read: ViewContainerRef }) dynamicTemplate: ViewContainerRef;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.dynamicTemplate = this.dynamicTemplate;
  }
}
