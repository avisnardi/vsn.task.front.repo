import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/views/home/home.component';
import { OwnerReadComponent } from './components/views/owner/owner-read/owner-read.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'owners', component: OwnerReadComponent }
    
];
export const RoutingModule = RouterModule.forRoot(routes);

