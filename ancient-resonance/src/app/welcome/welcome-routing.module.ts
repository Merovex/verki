import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeScreenComponent, GettingStartedComponent } from './components/index';

export const WelcomeRoutes: Routes = [
    { path: 'welcome', component: WelcomeScreenComponent },
    { path: 'getting-started', component: GettingStartedComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(WelcomeRoutes) ],
    exports: [ RouterModule ]
})
export class WelcomeRoutingModule { }
