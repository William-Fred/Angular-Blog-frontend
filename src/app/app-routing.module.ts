import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerConfig } from './Routing/top-menu.config'

routerConfig;

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
