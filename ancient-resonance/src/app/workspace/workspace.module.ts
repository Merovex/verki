import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkspaceRoutingModule } from './workspace-routing.module';

import { WorkspaceScreenComponent } from './components/workspace-screen/workspace-screen.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [WorkspaceScreenComponent]
})
export class WorkspaceModule { }
