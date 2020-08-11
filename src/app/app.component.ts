import { Component, ViewChild, ElementRef, NgZone, Renderer2 } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  datetime = null,
        date = null;

update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

  @ViewChild('live')
  public liveTimer: ElementRef;

  constructor(private zone: NgZone, private renderer: Renderer2) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.renderer.setProperty(
          this.liveTimer.nativeElement,
          'textContent',
          this.getLiveTime()
        );
      }, 1000);
    });
  }
}
