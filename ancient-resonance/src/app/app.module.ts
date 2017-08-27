import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// electron
import { NgxElectronModule } from './ngx-electron/ngx-electron.module';
// app
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { AppComponent } from './app.component';
// Scribesto IDE Components
import { WorkspaceComponent } from './workspace/workspace.component';
import { ToolTrayComponent } from './workspace/tool-tray/tool-tray.component';
import { EditorComponent } from './workspace/editor/editor.component';
import { KanbanComponent } from './workspace/kanban/kanban.component';
// Scribesto Data Components
import { ProjectComponent } from './project/project.component';
import { SectionComponent } from './section/section.component';
import { SectionListComponent } from './section/section-list/section-list.component';
import { ManuscriptComponent } from './manuscript/manuscript.component';
import { NotebookComponent } from './notebook/notebook.component';
import { SpreadsheetComponent } from './workspace/spreadsheet/spreadsheet.component';
import { KanbanCardComponent } from './workspace/kanban/kanban-card/kanban-card.component';
import { KanbanListComponent } from './workspace/kanban/kanban-list/kanban-list.component';
import { SpreadsheetListComponent } from './spreadsheet-list/spreadsheet-list.component';
import { SpreadsheetRowComponent } from './spreadsheet-row/spreadsheet-row.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectComponent,
        SectionComponent,
        SectionListComponent,
        ManuscriptComponent,
        NotebookComponent,
        DesktopComponent,
        ToolTrayComponent,
        EditorComponent,
        KanbanComponent,
        SpreadsheetComponent,
        KanbanCardComponent,
        KanbanListComponent,
        SpreadsheetListComponent,
        SpreadsheetRowComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NgxElectronModule,
        WelcomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
