import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { MingleService } from '@totvs/mingle';
import { MenuService } from 'src/app/modules/menu/services/menu.service';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.css']
})
export class HomemenuComponent {
  public collapsed = true
  public titleMenu: string = '';

  constructor(private mingleService: MingleService, private http: HttpClient, private menuService: MenuService) {

  }
  ngAfterContentInit() {
    this.menuService.getTitleMenu$().subscribe((titleMenu) => this.titleMenu = titleMenu);
    }


  readonly menus: Array<PoMenuItem> = [
    { label: 'Login', action: this.onClick.bind(this), icon: 'po-icon-user', shortLabel: 'Login'},
    { label: 'Home', link: '/home' ,icon: 'po-icon-user',  shortLabel: 'Home'},
    { label: 'PO UI - Angular Framework', link: '/user' , icon: 'po-icon-user',  shortLabel: 'PO IU'}
  ];

  private onClick() {
    this.mingleService.auth.login("r.raimundo",
    "Aninh@13311918",
    "COMBIO PRD")
    .subscribe({
      next: (dataLogin) => {
      console.log("Login com sucesso - dados do login", dataLogin);

    }, error: (error: any) => {
      console.log('Erro', error);
      console.error('Falha na autenticação');
    }});
    }

   private refreshToken(){
    const bodyRefreshToken = this.mingleService.getBodyToRefreshTokenAPI();
    const urlRefreshTOken = this.mingleService.getRefreshTokenURL();

    this.http.post(urlRefreshTOken, bodyRefreshToken).subscribe(resultAuth => console.log('Refresh',resultAuth))
  }
}
