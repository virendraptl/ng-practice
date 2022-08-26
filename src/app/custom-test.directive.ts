import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomTest]'
})
export class CustomTestDirective {

  constructor() { }

}

// ---------------------------------
import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]',
})
export class betterHighlightDirective {
  @Input() defaultColor: string;
  @Input() highlightColor: string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}

// https://stackblitz.com/edit/angular-custom-directive?file=app%2Fbetter-highlight%2Fbetter-highlight.directive.ts,app%2Fapp.component.html