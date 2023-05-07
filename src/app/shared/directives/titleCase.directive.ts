import { TitleCasePipe } from '@angular/common';
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][appTitleCase]',
})
export class TitleCaseDirective {
  constructor(public ngControl: NgControl, public titleCase: TitleCasePipe) {}

  @HostListener('ngModelChange', ['$event'])
  onInputChange(value: any) {
    const arrStr = value.toLowerCase().split(' ');
    const titleCaseArr: Array<any> = [];

    for (const str of arrStr) {
      titleCaseArr.push(str.charAt(0).toUpperCase() + str.slice(1));
    }

    this.ngControl?.valueAccessor?.writeValue(titleCaseArr.join(' '));
  }
}
