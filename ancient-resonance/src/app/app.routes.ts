import { Routes, RouterModule } from '@angular/router';
/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
 // console.log('here');
export const AppRoutes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: '/welcome' }
    { path: '', pathMatch: 'full', redirectTo: 'workspace' }
];
