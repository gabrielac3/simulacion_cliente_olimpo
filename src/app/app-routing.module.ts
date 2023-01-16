import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaClienteComponent } from './components/prueba-cliente/prueba-cliente.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/pruebaCliente' },
  { path: 'pruebaCliente', component: PruebaClienteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
