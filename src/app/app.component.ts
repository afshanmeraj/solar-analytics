import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solar-analytics';
  // for now there is no theme switcher, define here which theme you want
  themeClass: string = 'dark-theme';

}
