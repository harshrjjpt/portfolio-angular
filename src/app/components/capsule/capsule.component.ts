import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss'],
})
export class CapsuleComponent implements OnInit {
  @Output() parentComponent: EventEmitter<any> = new EventEmitter();
  @Input() skillCapsule: {
    skillName: string;
    skillValue: any;
    Image: any;
  };

  printFill(data) {
    this.parentComponent.emit(this.skillCapsule.skillValue);
  }

  ngOnInit(): void {
    // this.parentComponent.emit(this.skillCapsule.skillValue);
  }
}
