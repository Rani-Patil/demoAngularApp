import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { 
    path:'',
    children: [
      {
        path:'contact',
        component: ContactPageComponent
      },
      {
        path:'about',
        component: AboutPageComponent,
      },
      {
        path:'product',
        component: ProductComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
