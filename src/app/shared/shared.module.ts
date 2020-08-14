import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    TitleComponent,
  ],
  declarations: [
    ButtonComponent,
    TitleComponent
  ]
})
export class SharedModule { }
