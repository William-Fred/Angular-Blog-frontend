import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerConfig } from './routing/top-menu.config'

routerConfig;

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
