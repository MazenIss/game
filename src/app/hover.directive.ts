import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private ref:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.ref.nativeElement,'background-color','blue');
  }

}
