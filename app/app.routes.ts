import { Routes } from '@angular/router';
import { InicioComponent } from './features/componentes/inicio/inicio.component';
import { FestivosComponent } from './features/componentes/festivos/festivos.component';

export const routes: Routes = [
    {path: "inicio", component:InicioComponent},
    {path: "fechaFestivos", component:FestivosComponent},

    
];
