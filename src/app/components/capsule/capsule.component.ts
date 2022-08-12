import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss'],
})
export class CapsuleComponent implements OnInit {
  @Input() skillCapsule: {
    skillName: string;
    skillValue: any;
  };

  ngOnInit(): void {}
}
