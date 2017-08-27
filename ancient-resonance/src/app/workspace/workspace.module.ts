import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';

import { WorkspaceScreenComponent } from './components/workspace-screen/workspace-screen.component';
// import { GettingStartedComponent } from './components/getting-started/getting-started.component';
// import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
        CommonModule,
        WorkspaceRoutingModule
  ],
    declarations: [
      WorkspaceScreenComponent,
      // GettingStartedComponent,
      // CardComponent
    ]
})
export class WorkspaceModule { }
