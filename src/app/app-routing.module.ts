import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', loadChildren: () =>
            import('./pages/home/home.module').then(m => m.HomeModule)}
    ],
  },
  {path: '**', redirectTo:'/', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }