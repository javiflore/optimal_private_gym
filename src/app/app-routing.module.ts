import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
