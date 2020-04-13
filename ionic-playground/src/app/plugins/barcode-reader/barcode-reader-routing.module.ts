import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeReaderPage } from './barcode-reader.page';
import { ScanBarcodeComponent } from './scan-barcode/scan-barcode.component';

const routes: Routes = [
  {
    path: '',
    component: BarcodeReaderPage,
  },
  {
    path: 'scan-barcode',
    component: ScanBarcodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodeReaderPageRoutingModule {}
