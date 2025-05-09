import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesModule } from './pages/pages.module';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },

    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "page",
        loadChildren: ()=>import("../app/pages/pages.module").then(m=>m.PagesModule)

    }

];
