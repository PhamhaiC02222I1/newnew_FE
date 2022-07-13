import { Component, OnInit } from '@angular/core';
import {UserAccount} from '../../../model/UserAccount';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../../service/admin.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
userAccount:UserAccount;
  status='Detail of User';
  success:any={
    message:"delete success"
  }
  constructor(private actRouter:ActivatedRoute,private adminService:AdminService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(userId=>{
      const id=+userId.get('id');
      this.adminService.getUserNameById(id).subscribe(result=>{
        this.userAccount=result;
      })
    })
  }
  ngSubmit(){
    this.adminService.deleteUser(this.userAccount.id).subscribe(data=>{
      if (JSON.stringify(data)==JSON.stringify(this.success)){
        this.status='delete success!!'
      }
    })
  }
}
