import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector
  } from '@angular/core';

import { ModalBoxComponent } from '../../core/modal-box/modal-box.component';


@Injectable()
export class ModalService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {  }

  dynamicContent: string;
  dynamicTemplate;
  dynamicComponent;

  addModal() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalBoxComponent);
    this.dynamicTemplate.clear();
    this.dynamicComponent = <ModalBoxComponent>this.dynamicTemplate.createComponent(componentFactory).instance;
    this.dynamicComponent.textProp = `${'You are on ' + this.dynamicContent + ' page'}`;
  }
  destroyDynamicComponent() {
    this.dynamicTemplate.clear();
  }
}

