import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayCompatibiliteComponent } from './array-compatibilite/array-compatibilite.component';
import { LegendeComponent } from './legende/legende.component';
import { RouterModule } from '@angular/router';
import { GedComponent } from './ged/ged.component';
import { LinkComponent } from './link/link.component';
import { ToolsComponent } from './tools/tools.component';
import { SageComponent } from './sage/sage.component';
import { ArrayLinkComponent } from './array-link/array-link.component';
import { ArrayToolsComponent } from './array-tools/array-tools.component';
import { ArrayGedComponent } from './array-ged/array-ged.component';
import { BoutonNavComponent } from './bouton-nav/bouton-nav.component';
import { FormAjoutezLigneComponent } from './form-ajoutez-ligne/form-ajoutez-ligne.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { FormSageComponent } from './form-sage/form-sage.component';
import { FormToolsComponent } from './form-tools/form-tools.component';
import { FormGedComponent } from './form-ged/form-ged.component';

 



@NgModule({
  declarations: [
    AppComponent,
    ArrayCompatibiliteComponent,
    LegendeComponent,
    LinkComponent,
    GedComponent,
    SageComponent,
    ToolsComponent,
    ArrayLinkComponent,
    ArrayToolsComponent,
    ArrayGedComponent,
    BoutonNavComponent,
    FormAjoutezLigneComponent,
    FormSageComponent,
    FormToolsComponent,
    FormGedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot ( [
      { path: 'sageX3', component: SageComponent },
      { path: 'Link' , component: LinkComponent},
      { path: 'Tools', component: ToolsComponent },
      { path: 'GED' , component: GedComponent},
      { path: 'AjoutLigneLink', component: FormAjoutezLigneComponent },
      { path: 'AjoutLigneSageX3', component: FormSageComponent },
      { path: 'AjoutLigneTools', component: FormToolsComponent },
      { path: 'AjoutLigneGED', component: FormGedComponent }
      
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
  ],

  exports: [
    MatFormFieldModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
