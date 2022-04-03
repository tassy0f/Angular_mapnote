import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAttrDirective]'
})
export class AttrDirective implements OnChanges {

  @Input() value:object;
  constructor(private el: ElementRef) { 
    
  }
    ngOnChanges(): void {
        for (let k in this.value) {
          this.el.nativeElement.setAttribute(k, this.value[k]);
          
        }
    }
}
