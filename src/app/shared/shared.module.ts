import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { GifSidebarComponent } from './gif-sidebar/gif-sidebar.component';
import { GifsModule } from '../gifs/gifs.module';


@NgModule({
  declarations: [
    SidebarComponent,
    GifSidebarComponent
  ],
  exports: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GifsModule
  ]
})
export class SharedModule { }
