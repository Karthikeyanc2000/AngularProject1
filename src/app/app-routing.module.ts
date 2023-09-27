import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { NotificationComponent } from './notification/notification.component';
import { ErrorComponent } from './error/error.component';
import { MyformsComponent } from './myforms/myforms.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //{path:'',component:HeaderComponent,pathMatch:'full'},
   {path:'', redirectTo:'MHOME',pathMatch:'full'},
   {path: 'MHOME',component:HeaderComponent},
   {path:"CONTACT",component:MyformsComponent},
   {path:'PRODUCTS',component:ProductsComponent},
   {path:"ABOUT",component:AboutComponent},
   {path:"Search",component:SearchComponent},
   {path:"cookie",component:NotificationComponent},
   {path:"**",component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
