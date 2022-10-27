import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RequestComponent } from './components/request/request.component';
import { SongDownloadComponent } from './components/song-download/song-download.component';
import { ModuleNotEnabledComponent } from './components/utils/module-not-enabled/module-not-enabled.component';

const routes: Routes = [
  {path: '', component: RequestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'notenabled', component: ModuleNotEnabledComponent},
  {path: 'download', component: SongDownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
