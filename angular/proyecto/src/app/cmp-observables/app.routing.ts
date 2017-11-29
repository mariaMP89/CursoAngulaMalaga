import { Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsuarioComponent} from './usuario/usuario.component';

const APP_ROUTES: Routes = [
{ path:'home', component: HomeComponent},
{ path:'usuario/:id', component: UsuarioComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
