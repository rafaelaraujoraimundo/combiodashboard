import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public titleMenu: string = 'Lista de Usuários';
  public userlist: any[] = [];
  private page = 1;
  private pageSize = 50;
  private dataUser: any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers(this.page, this.pageSize).subscribe({
      next: (data) => {
        this.dataUser = data
       this.dataUser.items.forEach( (data: any) => {
        this.userlist.push(data)
        console.log(this.userlist)
       })

      }
    })

  }

  loadNextPage() {
    this.page++;
    this.loadUsers();
  }
}
