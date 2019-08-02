import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjetRoutingModule } from './projet-routing.module';

import { ProjetComponent } from './projet.component';
import { ProjetDetailsComponent} from './projet-details.component';

import { BorderCardDirective } from './border-card.directive';
import { TypeColorPipe } from './type-color.pipe';

@NgModule(
  {
    imports: [
        CommonModule,
        ProjetRoutingModule
    ],
    declarations: [
        ProjetComponent,
        ProjetDetailsComponent,
        BorderCardDirective,
        TypeColorPipe
    ],

  }
)
export class ProjetModule{

}