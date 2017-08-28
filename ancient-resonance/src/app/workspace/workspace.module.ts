import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';

import { WorkspaceScreenComponent } from './components/workspace-screen/workspace-screen.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule
  ],
  declarations: [WorkspaceScreenComponent]
})
export class WorkspaceModule { }
