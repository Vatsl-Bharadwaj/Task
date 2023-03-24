import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableRoutingModule } from './table-routing.module';
import { ListingComponent } from './listing/listing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    NgSelectModule,
    FormsModule
  ]
})
export class TableModule { }
