import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // numbers=[1,2,3,4,5];
  oddNumber=[1,3,5];
  evenNumber=[2,4];
  onlyOdd=false;
  value=10;
}
