import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '.high-light'
})
export class HostColorDirective {

  @HostBinding('style.color') colorKey = 'yellow';
  @HostBinding('style.backgroundColor') bgColorKey = 'olive';

  @HostListener('mouseenter') onEnter() {
    this.colorKey = 'white';
    this.bgColorKey = 'blue';
  }

  @HostListener('mouseleave') onLeave() {
    this.colorKey = 'yellow';
    this.bgColorKey = 'red';
  }

}