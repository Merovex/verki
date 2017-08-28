import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspaceScreenComponent } from './components/index';

export const WorkspaceRoutes: Routes = [
    { path: 'workspace', component: WorkspaceScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(WorkspaceRoutes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
