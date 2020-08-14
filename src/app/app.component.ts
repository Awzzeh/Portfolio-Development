import {
  Component,
  ViewChild,
  ElementRef,
  NgZone,
  Renderer2,
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild('live')
  public live: ElementRef;

  constructor(private zone: NgZone, private renderer: Renderer2) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.renderer.setProperty(
          this.live.nativeElement,
          'textContent',
          moment().format('h:mm:ss A')
        );
      }, 500);
    });
  }
}
