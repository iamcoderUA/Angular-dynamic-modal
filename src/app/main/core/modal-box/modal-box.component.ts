import { Component, ViewChild, ElementRef, } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent {

  textProp: string;
  isActive = false;

  constructor(
  ) { }

  closeModal() {
    this.isActive = !this.isActive;
  }
}

