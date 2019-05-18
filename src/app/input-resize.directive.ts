import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputResize]'
})
export class InputResizeDirective {
  @HostBinding('style.width.px') width = 30;

  @HostListener('input', ['$event.target.value'])
  changeWidth(value) {
    this.width = 25 +  String(value).length * 9;
  }
}
