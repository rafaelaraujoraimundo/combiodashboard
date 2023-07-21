import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { PoMenuItem, PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile, PoNavbarItem  } from '@po-ui/ng-components';
import { MingleService } from '@totvs/mingle';
import { MenuService } from 'src/app/modules/menu/services/menu.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.css']
})
export class HomemenuComponent {
  public collapsed = true
  public titleMenu: string = '';
  public poNavBarShadow = true;
  public isAuth: boolean = false
  public displayName: any = localStorage.getItem('displayName');
  public emailDisplay: any = localStorage.getItem('displayEmail')

  navbarMenus: Array<PoNavbarItem> = [
    {
      label: 'User' , link: '/user'
    }
  ]



  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: this.emailDisplay,
    title: this.displayName
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Logout', action: (item: any) => this.showAction(item) }
  ];


  constructor( public loginService: LoginService, private mingleService: MingleService,  private menuService: MenuService, private poDialog: PoDialogService, private poNotification: PoNotificationService) {
    this.displayName = localStorage.getItem('displayName')
    this.emailDisplay = localStorage.getItem('emailDisplay')
  }
  ngAfterContentInit() {
    this.menuService.getTitleMenu$().subscribe((titleMenu) => this.titleMenu = titleMenu);
    this.loginService.getIsAuthenticated$().subscribe((isOnline) => this.isAuth = isOnline )
    this.displayName = localStorage.getItem('displayName')
    this.emailDisplay = localStorage.getItem('displayEmail')
    }


  readonly menus: Array<PoMenuItem> = [
    { label: 'Login', action: this.onClick.bind(this), icon: 'po-icon-user', shortLabel: 'Login'},
    { label: 'Home', link: '/home' ,icon: 'po-icon-user',  shortLabel: 'Home'},
    { label: 'PO UI - Angular Framework', link: '/user' , icon: 'po-icon-user',  shortLabel: 'PO IU'}
  ];

  private onClick() {
    this.loginService.refreshToken()
    //this.loginService.logout()
    }


  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
    console.log(item)
    this.loginService.logout()
  }
}
