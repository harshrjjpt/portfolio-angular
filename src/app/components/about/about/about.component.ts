import { Component, OnInit } from '@angular/core';
import Constants from 'src/utility/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  skills = Constants.data.skills;

  ngOnInit(): void {}
}
