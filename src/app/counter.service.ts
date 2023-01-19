import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeToInactiveCounter=0;
  inactiveToActiveCounter=0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter ++;
    console.log('InActive Count' +this.activeToInactiveCounter)
  }
  
  incrementInActiveToactive(){
    this.inactiveToActiveCounter ++;
    console.log('active Count' + this.inactiveToActiveCounter)
  }
}
