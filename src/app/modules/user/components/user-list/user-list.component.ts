import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  isLoading:any;
  USERS:any[] = [];
  currentPage:number = 1;
  total_pages:number = 1;
  PAGES:any[] = [];

  constructor(
    public modalService: NgbModal,
    public userService: UserService,
  ) { }

  ngOnInit(): void {

    this.isLoading = this.userService.isLoading$;
    this.listUsers(this.currentPage);
  }

  listUsers(page:number)
  {
    this.userService.listUsers(page).subscribe((resp:any) => {
      this.USERS = resp.users.data;
      this.currentPage = resp.links.current_page;
      this.total_pages = resp.links.pages;
      this.PAGES = resp.links.arr_pages;
      console.log(resp);
      
    });
  }

  OpenModalCreateUser()
  {
    const modalRef = this.modalService.open(UserAddComponent, {centered: true, size: 'md'});
  }

  deleteUser(USER:any)
  {
    alert("ELiminando usuario");
    
  }
}
