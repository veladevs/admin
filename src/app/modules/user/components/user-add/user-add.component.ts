import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  isLoading:any;
  // Lista de variables
  name:string = '';
  surname:string = '';
  email:string = '';
  role_id:number = 1;

  IMAGEN_PREVISUALIZADA:any = 'assets/media/avatars/300-6.jpg';
  FILE_AVATAR:any = null;
  constructor(
    public userService: UserService,
    public modal: NgbActiveModal,
    public toater: Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading = this.userService.isLoading$;
  }

  processAvatar($event:any)
  {
    if($event.target.files[0].type.indexOf("image") < 0)
    {
      this.toater.open({text: "SOLAMENTE SE ACEPTAN IMAGENES", caption: 'VALIDACIÓN', type: 'danger'});
      return; 
    }

    this.FILE_AVATAR = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.FILE_AVATAR);
    reader.onloadend = () => this.IMAGEN_PREVISUALIZADA  = reader.result;
  }

  save()
  {
    if(!this.name || !this.surname || !this.email || !this.role_id)
    {
      this.toater.open({text: "NECESITAS LLENAR TOODOS LOS CAMPOS", caption: "VALIDACIÓN", type: "danger"});
      return;
    }
    
    let formData = new FormData();
    formData.append("name", this.name);
    formData.append("surname", this.surname);
    formData.append("email", this.email);
    formData.append("role_id", this.role_id+'');
    formData.append("imagen", this.FILE_AVATAR);

    this.userService.registerUser(formData).subscribe((resp:any) => {
      console.log(resp);
      this.toater.open({text: resp.message_text, caption: "SUCCESS", type: "primary"});
      this.modal.close();
    });
  }

}
