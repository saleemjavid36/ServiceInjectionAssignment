import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private counterService:CounterService) { }
  acitveUsers=['Max','Anna'];
  inactiveUsers=['Chris','Manu'];

  setToActive(id:number){
    this.acitveUsers.push(this.inactiveUsers[id])
    this.inactiveUsers.splice(id,1)
    this.counterService.incrementInActiveToactive()
  }

  setToInactive(id:number){
    this.inactiveUsers.push(this.acitveUsers[id])
    this.acitveUsers.splice(id,1)
    this.counterService.incrementActiveToInactive()
  }
}
