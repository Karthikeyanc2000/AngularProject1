import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent {
 // @ViewChild('myForm') form:NgForm;

  onsubmit(form: NgForm){
    console.log(form);
  }

}
