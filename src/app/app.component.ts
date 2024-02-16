import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { InformationComponent } from './information/information.component';
import { MenTeamComponent } from './men-team/men-team.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive ,RouterLink,NavComponent,FooterComponent,HomeComponent,AboutComponent,MediaComponent,MenTeamComponent,InformationComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Route-angular';
}
