import { Component, OnInit } from '@angular/core';
import { MenuItems } from './../menu-items';
import { HeaderService } from './../header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ HeaderService ]
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItems[];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void{
    this.populateHeaderItems();
  }

  populateHeaderItems(): void{
    this.menuItems = this.headerService.getMenuItems();
  }

}

