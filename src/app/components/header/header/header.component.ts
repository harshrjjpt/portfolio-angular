import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeHandler = () => {
    if (localStorage.getItem('mytheme') === 'light') {
      localStorage.setItem('mytheme', 'dark');
      this.filler.themechange('dark');
    } else if (localStorage.getItem('mytheme') === 'dark') {
      localStorage.setItem('mytheme', 'light');
      this.filler.themechange('light');
    }
    console.log(localStorage.getItem('mytheme'));
  };

  constructor(public filler: FillerService) {}

  ngOnInit(): void {}
}
