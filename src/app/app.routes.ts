import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'Inicio',
      },
      {
        path: 'inicio',
        component: InicioComponent,
        title: 'Inicio',
      },
      {
        path: 'buscar',
        component: BuscarComponent,
        title: 'Buscar',
      },
      {
        path: 'favoritos',
        component: FavoritosComponent,
        title: 'Favoritos',
      },
];
