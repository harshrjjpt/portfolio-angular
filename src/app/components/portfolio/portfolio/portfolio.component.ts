import { Component, OnInit } from '@angular/core';
import { FillerService } from 'src/app/filler.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(public filler: FillerService) {}

  ngOnInit(): void {}
}
