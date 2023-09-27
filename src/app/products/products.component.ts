import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products =[
    {id:1,name:"Apple iphone 14",price: '65,000',color: 'Black',available:'Available',image:"assets/products/shopping1.jpeg"},
    {id:2,name:"Dell XPS 15",price: '1,15,000',color: 'silver',available:'Available',image:"assets/products/shopping2.jpeg"},
    {id:3,name:"LG fully automatic washing machine",price: '23,000',color: 'white',available:'Available',image:"assets/products/shopping3.jpeg"},
    {id:4,name:"LG inverter AC",price: '35,000',color: 'white',available:'Not Available',image:"assets/products/shopping4.jpeg"},
    {id:5,name:"Lenovo ipad 8",price: '18,000',color: 'Black',available:'Available',image:"assets/products/shopping5.jpeg"},
    {id:6,name:"Apple Smart watch",price: '55,000',color: 'gold',available:'Not Available',image:"assets/products/shopping6.jpeg"}
  ];


}
