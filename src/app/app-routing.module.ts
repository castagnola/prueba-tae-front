import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { PublicoComponent } from './components/publico/publico.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: 'administracion',
    component: AdministracionComponent,
  },
  {
    path: 'publico',
    component: PublicoComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
