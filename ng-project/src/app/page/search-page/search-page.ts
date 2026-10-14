import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';
import { Profile } from '../../data/services/profile';


@Component({
  imports: [RouterOutlet,ProfileCard],
  selector: 'app-search-page',
  styleUrl: './search-page.css',
  templateUrl: './search-page.html',
})
export class SearchPage {
  profileService = inject(Profile);
  profiles = signal<any[]>([]);

  constructor() {
    this.profileService.getDataApi().subscribe((data: any) => {
      this.profiles.set(data);
      console.log(data);
    });
  }
}
