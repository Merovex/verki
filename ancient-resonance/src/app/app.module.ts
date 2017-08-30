import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// electron
import { NgxElectronModule } from './ngx-electron/ngx-electron.module';
// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// app
import { WelcomeModule } from './welcome/welcome.module';
import { WorkspaceModule } from './workspace/workspace.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxElectronModule,
        WelcomeModule,
        WorkspaceModule,
        AppRoutingModule,
        NgbModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
