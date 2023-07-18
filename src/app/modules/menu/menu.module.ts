import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomemenuComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    RouterModule
  ],
  exports: [HomemenuComponent]
})
export class MenuModule { }
