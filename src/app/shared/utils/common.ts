import * as moment from "moment";

export class Common {
  static regex: RegExp = new RegExp(/^\d+[.]?\d{0,2}$/g); // user can put . or , char.
  // input also cannot start from , or .
  static specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    '-',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
  ];

  static isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '' || value.length === 0;
  }

  static isNotEmpty(value: any): boolean {
    return !Common.isEmpty(value);
  }

  static findById(id: number, items: any[]) {
    items.filter(item => {
      return item.id === id;
    });
    return null;
  }

  static setSelected(obj: any) {
    if (obj.selected) {
      obj.selected = false;
    } else {
      obj.selected = true;
    }
  }

  static componentToHex(c: any) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  static rgbToHex(r: number, g: number, b: number): string {
    if (r !== null && g !== null && b !== null) {
      return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    } else {
      return 'undefined';
    }
  }

  static hexToRgb(hex: any) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  static deepCopy(obj: any) {
    // return Object.assign({}, oldValue);
    var clonedObject: any;
    if (obj instanceof Array) {
      var itemArray = Object.assign([], obj);
      clonedObject = itemArray;

      for (var j = 0; j < clonedObject.length; j++) {
        clonedObject[j] = this.deepCopy(clonedObject[j]);
      }

      return clonedObject;
    } else if (typeof obj === 'number' || typeof obj == 'string') {
      return obj;
    } else {
      var item = Object.assign({}, obj);
      clonedObject = item;

      let allKeys = Object.keys(clonedObject);

      for (var i = 0; i < allKeys.length; i++) {
        if (clonedObject[allKeys[i]] instanceof Array) {
          //If the calue is Array
          clonedObject[allKeys[i]] = this.deepCopy(clonedObject[allKeys[i]]);
        } else if (moment.isMoment(clonedObject[allKeys[i]])) {
          clonedObject[allKeys[i]] = clonedObject[allKeys[i]].clone();
        } else if (clonedObject[allKeys[i]] instanceof Object) {
          //if the value is JOBJECT.
          clonedObject[allKeys[i]] = this.deepCopy(clonedObject[allKeys[i]]);
        }
      }
      return clonedObject;
    }
  }

  static splitIdIfNeeded(id: any): any {
    if (typeof id === 'number') {
      return id;
    } else {
      const values: string[] = id.split('-');
      return values.length > 1 ? parseInt(values[1]) : id;
    }
  }

  static arrayToCommaSepString(array:any, valueName: any) {
    let returnValue = '';
    array.forEach((item: any, index: number) => {
      if (index === 0) {
        returnValue = returnValue + '' + this.splitIdIfNeeded(item[valueName]);
      } else {
        returnValue = returnValue + ',' + this.splitIdIfNeeded(item[valueName]);
      }
    });
    return returnValue;
  }

  static arrayToReplacementString(array: any, valueName: any) {
    let returnValue = '';
    array.forEach((item: any, index: any) => {
      returnValue = returnValue + '' + this.splitIdIfNeeded('{' + item[valueName] + '}');
    });
    return returnValue;
  }

  static removeEmptyFields(obj: any) {
    Object.keys(obj).forEach(key => {
      if (Common.isEmpty(obj[key])) {
        delete obj[key];
      }
    });
  }

  static isDateBeforeToday(date: moment.Moment) {
    return date && date.isBefore(moment(), 'day');
  }

  static isDateAfterToday(date: moment.Moment) {
    return date && moment().isBefore(date, 'day');
  }

  static daysBetweenToday(date: any) {
    return date.diff(moment(), 'days');
  }

  static currentFinYear(): number {
    const today = new Date();
    let year = today.getFullYear();
    const finYearStart = new Date(year, 9, 1);
    if (today > finYearStart) {
      return ++year;
    }
    return year;
  }

  constructor() {}
}
