import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:string[] | any
  
  constructor(private userService:UsersService){}
  
  ngOnInit() {
    this.users= this.userService.acitveUsers
  }

  onSetToInactive(id:number){
      this.userService.setToInactive(id);
  }
}
