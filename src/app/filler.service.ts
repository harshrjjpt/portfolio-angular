import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FillerService {
  fillerWidth: number = 0;
  themeclass: string = 'light';

  gettheme() {
    return localStorage.getItem('mytheme');
  }

  themechange(color: string) {
    if (this.themeclass === 'light') {
      this.themeclass = color;
    } else if (this.themeclass === 'dark') {
      this.themeclass = color;
    }
  }

  constructor() {}
}
