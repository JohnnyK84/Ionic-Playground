import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scan-barcode',
  templateUrl: './scan-barcode.component.html',
  styleUrls: ['./scan-barcode.component.scss'],
})
export class ScanBarcodeComponent implements OnInit {
  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {}

  scanBarcode() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        alert('data' + JSON.stringify(barcodeData));
      })
      .catch((err) => {
        alert('Error' + JSON.stringify(err));
      });
  }
}
