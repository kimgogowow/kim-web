import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvDisplayComponent } from './cv-display/cv-display.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"cvdisplay",component:CvDisplayComponent},
  {path:"certificates",component:CertificateComponent},
  {path:"about",component:AboutComponent},
  {path:"projects",component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
