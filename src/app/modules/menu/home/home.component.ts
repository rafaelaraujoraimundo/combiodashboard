import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public titleMenu: string = 'Home'
  constructor(private menuService: MenuService) {}

  updateTitleMenu() {
    this.menuService.emitTitleMenu$(this.titleMenu);
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.updateTitleMenu()
    }
}
