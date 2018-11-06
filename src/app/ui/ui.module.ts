import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { InfodisplayComponent } from './infodisplay/infodisplay.component';
import { ChartComponent } from '../chart/chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	HeaderComponent, 
  	LayoutComponent, 
  	InfodisplayComponent, 
  	ChartComponent
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
