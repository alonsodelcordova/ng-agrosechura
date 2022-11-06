import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-agrosechura';
  show = false;

  onShow(){
    this.show =!this.show;
  }
}
