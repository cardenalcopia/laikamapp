import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApuntadasComponent } from './pages/apuntadas/apuntadas.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CreadasComponent } from './pages/creadas/creadas.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListadoChatsComponent } from './pages/listado-chats/listado-chats.component';
import { CardsPipicanesComponent } from './pages/cards-pipicanes/cards-pipicanes.component';
import { CardsActividadesComponent } from './pages/cards-actividades/cards-actividades.component';
import { PipicanComponent } from './pages/pipican/pipican.component';
import { AddActividadComponent } from './pages/add-actividad/add-actividad.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import {ModificarComponent} from './pages/modificar/modificar.component'
const routes: Routes = [
  {path: "", component: LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"cards-actividades",component:CardsActividadesComponent},
  {path:"cards-pipicanes",component:CardsPipicanesComponent},
  {path:"chat",component:ChatComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"apuntadas", component:ApuntadasComponent},
  {path:"creadas",component:CreadasComponent},
  {path: "faqs",component:FaqsComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"about-us",component:AboutUsComponent},
  {path: "registro", component: RegistroComponent},
  {path: "login", component: LoginComponent},
  {path:"chats",component:ChatComponent},
  {path: "pipicanCard", component:PipicanComponent},
  {path:"listado-chats",component:ListadoChatsComponent},
  {path: "crear", component: AddActividadComponent},
  {path: "actividad", component: ActividadComponent},
  {path:"actividadCard", component:ActividadComponent},
  {path:"modificar",component:ModificarComponent},
  {path: "pipicanCard/:id", component:PipicanComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
