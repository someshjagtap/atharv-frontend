import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpecialCharacterValidator]'
})
export class SpecialCharacterValidatorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const specialKeys = [',', '.', '/', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '\'', '\"', '<', '>', '?', '`', '~'];
    if (specialKeys.indexOf(event.key) !== -1) {
      event.preventDefault();
    }
  }
}
