import { Component } from '@angular/core';
import { UsreSchema } from '../Models/userSchema';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:UsreSchema = {} 

  constructor(private api:ApiService,private toaster:ToastrService){}

  cancel(){
   this.user.email=""
   this.user.empId=""
   this.user.name=""
   this.user.status=""
  }

  addUser(){
  this.api.addUserAPI(this.user).subscribe({
    next:(res:any)=>{
      this.toaster.success("New Employee Added Successfully") 
      this.cancel()
    },
    error:(reason:any)=>{
      console.log(reason);
      
     }
   })
  }
}

