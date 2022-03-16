import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SwitchLabelModel} from './switch-label.model';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {

  @Input() width!: number;
  @Input() switchLabel!: SwitchLabelModel;
  @Output() toggleSwitchStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  selected = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  setValue($event: Event): void {
    // @ts-ignore
    this.toggleSwitchStatus.emit($event.target.checked);
  }
}
