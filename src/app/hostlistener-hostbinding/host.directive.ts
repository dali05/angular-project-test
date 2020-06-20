import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: "[hostTest]"
})
export class HostDirective {

  @HostBinding('value') textTest: string = '';

  @HostListener("mouseenter") addTxt(){
      this.textTest = 'Hello value host binding';
  }
  @HostListener("mouseleave") removeTxt(){
      this.textTest = '';
  }

}
