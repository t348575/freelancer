import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/browse',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'browse', loadChildren: () => import('../browse/browse.module').then( m => m.BrowsePageModule) },
      { path: 'search', loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule) },
      { path: 'profile', loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
