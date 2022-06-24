import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [{path:"", component:HomepageComponent},
  {path:"\signup", component:SignupComponent},
  {path:"\login", component:LoginComponent},
  {path:"\addbook", component:AddbookComponent,canActivate:[AuthGuard]},
  {path:"\mybooks", component:MybooksComponent,canActivate:[AuthGuard]},
  {path:"\edit", component:UpdatebookComponent,canActivate:[AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
