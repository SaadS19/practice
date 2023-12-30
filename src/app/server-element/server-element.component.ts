import { AfterContentChecked, AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges,
  ViewChild
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit,OnDestroy{
  @Input() element!:{
    type:string,name:string,content:string
  };
  @Input() name!:string;
  @ViewChild('heading') header!:ElementRef;
  constructor(){
    console.log('constructor Called');
  }
  ngOnInit(){
    console.log('ngOnInit called (Called once the component is initialized)')
    console.log('Text Content '+this.header.nativeElement.textContent);
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called (Called after a bound input property changes )');
    console.log(changes);
  }
  ngDoCheck(){
    console.log('ngDoCheck called (Called during every change detection run)')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called! (Called after content (ng-content) has been projected into view)')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called! (Called every time the projected content has been checked)')
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!(Called every time the view (and child views) have been checked)')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!(Called after the components view (and child views) has been initialized)');
    console.log(this.header.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called! (Called once the component is about to be destroyed)')
  }
}
