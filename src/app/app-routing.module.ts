import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardActividadesComponent } from './components/card-actividades/card-actividades.component';
import { CardPipicanComponent } from './components/card-pipican/card-pipican.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApuntadasComponent } from './pages/apuntadas/apuntadas.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CreadasComponent } from './pages/creadas/creadas.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"cards-actividades",component:CardActividadesComponent},
  {path:"cards-pipicanes",component:CardPipicanComponent},
  {path:"chat",component:ChatComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"apuntadas", component:ApuntadasComponent},
  {path:"creadas",component:CreadasComponent},
  {path: "faqs",component:FaqsComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"about-us",component:AboutUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
