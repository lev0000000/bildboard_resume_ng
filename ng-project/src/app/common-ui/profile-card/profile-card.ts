import { Component, input } from '@angular/core';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';

@Component({
  imports: [ImgUrlPipe],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  profile = input.required<any>();
}
