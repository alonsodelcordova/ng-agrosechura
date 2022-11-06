import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompromisoComponent } from './pages/compromiso/compromiso.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DistribucionComponent } from './pages/distribucion/distribucion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'compromiso',
    component: CompromisoComponent,
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path: 'distribucion',
    component: DistribucionComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
