import { Component, OnInit } from '@angular/core';
import { FillerService } from './filler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public filler: FillerService) {}

  title = 'my-portfolio';

  ngOnInit(): void {
    if (!localStorage.getItem('mytheme')) {
      localStorage.setItem('mytheme', 'dark');
    }
  }
}
