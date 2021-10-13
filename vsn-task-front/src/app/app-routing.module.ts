import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
    //home
    {
        path: '',
        component: HomeComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);