import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="notification-div" [hidden] ="displayNotification">
  <p>This website uses cookies to provide better user experience.</p>
  <div class ="close"><button class="btn" (click)="CloseNotification()" >X</button></div>
  </div>
  <hr class="horizontal-line">`,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: rgb(248, 233, 94); text-align:centre;}","p{font-size: 14px;}",".close{float: right; margin-top: -15px;}",".horizontal-line {border-top: 2px solid #312f2f; margin: 20px 0; }"]
})
export class NotificationComponent {

  displayNotification : boolean = false;

  CloseNotification()
  {
    this.displayNotification = true;
  }

}
