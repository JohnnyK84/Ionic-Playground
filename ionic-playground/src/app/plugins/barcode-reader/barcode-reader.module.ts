import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeReaderPageRoutingModule } from './barcode-reader-routing.module';

import { BarcodeReaderPage } from './barcode-reader.page';
import { ScanBarcodeComponent } from './scan-barcode/scan-barcode.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeReaderPageRoutingModule,
  ],
  providers: [BarcodeScanner],
  declarations: [BarcodeReaderPage, ScanBarcodeComponent],
})
export class BarcodeReaderPageModule {}
