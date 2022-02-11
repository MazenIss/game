import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhover]'
})
export class BetterhoverDirective {

  constructor(private ref:ElementRef,private renderer:Renderer2) { }
  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.ref.nativeElement,'background-color','red');
  }@HostListener('mouseleave') mousenotover(){
    this.renderer.setStyle(this.ref.nativeElement,'background-color','pink');
  }

}
