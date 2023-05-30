import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(3000, style({ backgroundColor: 'beige', opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {

  showIcon: string = '';
  toggleIcon(icon: string) {
    this.showIcon = this.showIcon === icon ? '' : icon


  }

}
