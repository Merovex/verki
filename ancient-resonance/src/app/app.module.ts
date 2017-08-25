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
import { DesktopComponent } from './desktop/desktop.component';
import { ToolTrayComponent } from './desktop/tool-tray/tool-tray.component';
import { EditorComponent } from './desktop/editor/editor.component';
import { KanbanComponent } from './desktop/kanban/kanban.component';
// Scribesto Data Components
import { ProjectComponent } from './project/project.component';
import { SectionComponent } from './section/section.component';
import { SectionListComponent } from './section/section-list/section-list.component';
import { ManuscriptComponent } from './manuscript/manuscript.component';
import { NotebookComponent } from './notebook/notebook.component';
import { SpreadsheetComponent } from './desktop/spreadsheet/spreadsheet.component';
import { KanbanCardComponent } from './desktop/kanban/kanban-card/kanban-card.component';
import { KanbanListComponent } from './desktop/kanban/kanban-list/kanban-list.component';

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
        KanbanListComponent
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
