import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { InformationComponent } from './information/information.component';
import { MenTeamComponent } from './men-team/men-team.component';

export const routes: Routes = [
    
    { path: 'home', component:HomeComponent},
    { path: 'about', component:AboutComponent},
    { path: 'media', component:MediaComponent},
    { path: 'information', component:InformationComponent},
    { path: 'team', component:MenTeamComponent},
    { path: 'contact', component:ContactComponent},
];
