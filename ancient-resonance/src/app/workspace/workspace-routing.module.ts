import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// app
import { WorkspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        RouterModule.forChild(WorkspaceRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WorkspaceRoutingModule { }
