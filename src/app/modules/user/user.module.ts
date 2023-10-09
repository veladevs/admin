import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent,
    UserListComponent,
    UserViewComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
    NgxPaginationModule,
  ]
})
export class UserModule { }
