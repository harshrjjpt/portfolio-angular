import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';
import Constants from 'src/utility/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public filler: FillerService) {}
  showSkillBar = false;
  skillFill = 0;
  skills = Constants.data.skills;

  parentComponent(data) {
    this.skillFill = data;
    this.filler.fillerWidth = 0;
    this.increasewidth();
  }

  increasewidth() {
    let interval = setInterval(() => {
      if (this.filler.fillerWidth >= this.skillFill) {
        clearInterval(interval);
        return;
      }
      this.filler.fillerWidth = this.filler.fillerWidth + 1;
    }, 20);
  }

  ngOnInit(): void {}
}
