import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {HueService} from "./hue/hue.service";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./app-state.reducer";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HueEffects} from "./hue/hue.effects";
import {HuePageComponent} from "./hue/hue.page.component";
import {HueComponent} from "./hue/hue.component";

@NgModule({
    declarations: [
        AppComponent,
        HuePageComponent,
        HueComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(HueEffects)
    ],
    providers: [
        HueService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
