import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxElectronService } from './../../../ngx-electron/ngx-electron.service';

@Component({
    selector: 'scribesto-workspace-screen',
    templateUrl: './workspace-screen.component.html',
    styleUrls: ['./workspace-screen.component.scss']
})
export class WorkspaceScreenComponent {

    constructor(
        private electron: NgxElectronService,
        private router: Router) { }

    // gettingStarted(): void {
    //     this.electron.send('ping');
    //     this.electron.listener$.subscribe(message => {
    //         if (message === 'pong') {
    //             this.electron.shell.beep();
    //             this.router.navigate(['/getting-started']);
    //         }
    //     });
    // }

}
