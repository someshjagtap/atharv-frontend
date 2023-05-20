import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private toastr: ToastrService) {}

  dateAgo(value: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29)
        // less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      const intervals: any = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + i + ' ago'; // singular (1 day ago)
          } else {
            return counter + ' ' + i + 's ago'; // plural (2 days ago)
          }
      }
    }
    return value;
  }

  isDateBeforeToday(date: moment.Moment) {
    return date && date.isBefore(moment(), 'day');
  }

  isDateAfterToday(date: moment.Moment) {
    return date && moment().isBefore(date, 'day');
  }

  daysBetweenToday(date: moment.Moment) {
    return date.diff(moment(), 'days');
  }

  showSuccess(message: any) {
    this.toastr.success(message, 'Success!', {
      newestOnTop: true,
      closeButton: true,
    });
  }

  showErrorMessage(message: any) {
    this.toastr.error(message, 'Error', {
      enableHtml: true,
      closeButton: true,
      timeOut: 5000,
    });
  }

  showWarning(message: any) {
    this.toastr.warning(message, 'Alert!', { closeButton: true });
  }

  showInfo(message: string) {
    return this.toastr.info(message, 'Info', {
      newestOnTop: true,
      closeButton: true,
    });
  }

  dismissToast(toastId: number) {
    this.toastr.remove(toastId);
  }

  dismissAllToastr() {
    this.toastr.clear();
  }
}
