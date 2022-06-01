import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { ListePokemonComponent } from './liste-pokemon/liste-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    ListePokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
