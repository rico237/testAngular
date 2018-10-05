import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { InfodisplayComponent } from './infodisplay/infodisplay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, LayoutComponent, InfodisplayComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
