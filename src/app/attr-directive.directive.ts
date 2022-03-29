import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttrDirective]'
})
export class AttrDirective implements OnInit {

  constructor(private el: ElementRef) { 
    
  }
    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = 'yellow';   
      }
}
