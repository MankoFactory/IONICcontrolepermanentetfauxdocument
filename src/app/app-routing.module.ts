import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
   {
     path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
   },
   {
     path: 'garantupdate/:id',
     loadChildren: () => import('./garantupdate/garantupdate.module').then( m => m.GarantupdatePageModule)
   },
   {
    path: 'garantliste',
    loadChildren: () => import('./garantliste/garantliste.module').then( m => m.GarantlistePageModule)
  },
   {
    path: 'donnees/:id',
    loadChildren: () => import('./donnees/donnees.module').then( m => m.DonneesPageModule)
   },
 
   {
     path: 'modif/:id',
    loadChildren: () => import('./modif/modif.module').then( m => m.ModifPageModule)
   },
 
   {
    path: 'todo',
     loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
   },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'newpassword',
    loadChildren: () => import('./newpassword/newpassword.module').then( m => m.NewpasswordPageModule)
  },
  {
    path: 'garantliste',
    loadChildren: () => import('./garantliste/garantliste.module').then( m => m.GarantlistePageModule)
  },
  {
    path: 'garantupdate',
    loadChildren: () => import('./garantupdate/garantupdate.module').then( m => m.GarantupdatePageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modeles/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modeles/login/login.module').then( m => m.LoginPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
