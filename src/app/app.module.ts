import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CardPipicanComponent } from './components/card-pipican/card-pipican.component';
import { CardActividadesComponent } from './components/card-actividades/card-actividades.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { ButtonLargoComponent } from './components/button-largo/button-largo.component';
import { FormularioAddActividadComponent } from './components/formulario-add-actividad/formulario-add-actividad.component';
import { FormularioPerfilComponent } from './components/formulario-perfil/formulario-perfil.component';
import { FormularioModActividadComponent } from './components/formulario-mod-actividad/formulario-mod-actividad.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsPipicanesComponent } from './pages/cards-pipicanes/cards-pipicanes.component';
import { PipicanComponent } from './pages/pipican/pipican.component';
import { ListadoChatsComponent } from './pages/listado-chats/listado-chats.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CardsActividadesComponent } from './pages/cards-actividades/cards-actividades.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { AddActividadComponent } from './pages/add-actividad/add-actividad.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { DetalleActividadComponent } from './components/detalle-actividad/detalle-actividad.component';
import { ApuntadasComponent } from './pages/apuntadas/apuntadas.component';
import { CardApuntadasActividadComponent } from './components/card-apuntadas-actividad/card-apuntadas-actividad.component';
import {ContactoComponent} from './pages/contacto/contacto.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { LoadingMapaComponent } from './components/loading-mapa/loading-mapa.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from "@angular/common/http";
import { CardCreadasActividadComponent } from './components/card-creadas-actividad/card-creadas-actividad.component';
import { CreadasComponent } from './pages/creadas/creadas.component';
import { FormularioEditarActividadComponent } from './components/formulario-editar-actividad/formulario-editar-actividad.component';
import { ModificarComponent } from './pages/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    CardPipicanComponent,
    CardActividadesComponent,
    HeaderComponent,
    NavComponent,
    FormularioRegistroComponent,
    FormularioLoginComponent,
    ButtonLargoComponent,
    FormularioAddActividadComponent,
    FormularioPerfilComponent,
    FormularioModActividadComponent,
    FormularioContactoComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    CardsPipicanesComponent,
    PipicanComponent,
    ListadoChatsComponent,
    ChatComponent,
    CardsActividadesComponent,
    ActividadComponent,
    AddActividadComponent,
    MenuLateralComponent,
    PerfilComponent,
    FaqsComponent,
    DetalleActividadComponent,
    ApuntadasComponent,
    CardApuntadasActividadComponent,
    ContactoComponent,
    MapaComponent,
    LoadingMapaComponent,
    BtnMyLocationComponent,
    CardCreadasActividadComponent,
    CreadasComponent,
    FormularioEditarActividadComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

