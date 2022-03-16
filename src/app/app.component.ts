import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toggle-switch';
  switchLabel = {
    on: 'First',
    off: 'Last'
  };
}
