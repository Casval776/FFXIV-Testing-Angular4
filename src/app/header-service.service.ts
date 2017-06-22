import { Injectable } from '@angular/core';
import { MockMenuItems } from './mock-menu-items';
import { MenuItems } from './menu-items';

@Injectable()
export class HeaderService {

  constructor() {   }

  getMenuItems(): MenuItems[]{
    return MockMenuItems;
  }
}
