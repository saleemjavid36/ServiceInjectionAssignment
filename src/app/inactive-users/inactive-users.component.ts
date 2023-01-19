import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users:string[] | any;
  // @Output() userSetToActive = new EventEmitter<number>();


  constructor(private userService:UsersService){}
  
  ngOnInit() {
    this.users= this.userService.inactiveUsers
  }
  
  onSetToActive(id:number){
    // this.userSetToActive.emit(id)
    this.userService.setToActive(id);
    
  }
}
