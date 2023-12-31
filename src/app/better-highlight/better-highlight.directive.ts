import { Directive, OnInit,ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor=this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','red');
  }
  @Input() defaultColor:string='transparent'; 
  @Input() highlightColor:string='blue'; 
  @HostBinding('style.background') backgroundColor:string=this.defaultColor;
  @HostBinding('style.fontStyle') fontStyle:string='normal';
  @HostBinding('style.font-weight') fontWeight:string='normal';

  @HostListener('mouseenter') mouseover(){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','red');
  this.backgroundColor=this.highlightColor;
  this.fontStyle='italic';
  this.fontWeight='bold';
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','transparent');
    this.backgroundColor=this.defaultColor;
    this.fontStyle='normal';
    this.fontWeight='normal';
  }
}
