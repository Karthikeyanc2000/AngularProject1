import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  siteslogan: string ="Ordering Made Easy, Anytime, Anywhere.";

  getSiteSlogan()
  {
    return "This is the new slogan for this web application";
  }

  source: string ="assets/shopping.jpg";

  displayNotification:boolean = false;
  CloseNotification()
  {
    this.displayNotification = true;
  }

}
