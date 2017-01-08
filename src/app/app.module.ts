import {BrowserModule} from '@angular/platform-browser';
import 'hammerjs';
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
import {HuePageComponent} from "./hue/hue.page.component";
import {HueComponent} from "./hue/hue.component";
import {LightComponent} from "./hue/light/light.component";
import {LightEffects} from "./hue/light/light.effects";
import {BridgeEffects} from "./hue/bridge/bridge.effects";
import {BridgeComponent} from "./hue/bridge/bridge.component";
import {LightsComponent} from "./hue/light/lights.component";
import {BridgesComponent} from "./hue/bridge/bridges.component";

@NgModule({
    declarations: [
        AppComponent,
        HuePageComponent,
        HueComponent,
        LightComponent,
        BridgeComponent,
        LightsComponent,
        BridgesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(BridgeEffects),
        EffectsModule.run(LightEffects)
    ],
    providers: [
        HueService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
