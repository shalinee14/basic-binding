import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  title = "Create 1st dropdown"

  month = ['Jan','Feb', 'Mar', 'Apr', 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov', 'Dec'];

  isAvailable = "false";

  myFunction($event){
    // alert('Button working');
    console.log('Function working');
    this.isAvailable = !this.isAvailable;
  }
  
  changeMonth(event){
    console.log('Month is change');
    alert('Month is changed from the dropdown');
    console.log(event);
  }
}
