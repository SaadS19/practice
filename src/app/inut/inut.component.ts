import { Component } from '@angular/core';

@Component({
  selector: 'app-inut',
  templateUrl: './inut.component.html',
  styleUrls: ['./inut.component.css']
})
export class InutComponent {
  array:string[]=[];
  name='';

  submitInput(){
    this.array.push(this.name);
  }

}
