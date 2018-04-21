import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent {

  textProp: string;
  isActive: Boolean = false;

  constructor(
  ) { }

  closeModal() {
    this.isActive = !this.isActive;
  }
}

