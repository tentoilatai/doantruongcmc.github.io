import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Removed ReactiveFormsModule import here

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent {
  qrForm: FormGroup;
  qrImageUrl: string = '';

  // Bank details (you can make these configurable via environment or input properties)
  private readonly bankId = '970422';
  private readonly accountNo = '2004';
  private readonly accountName = 'DOAN TNCS HCM TRUONG DH CMC';

  constructor(private fb: FormBuilder) {
    this.qrForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }

  generateQR(): void {
    if (this.qrForm.valid) {
      const { description, amount } = this.qrForm.value;
      // Log inputs for debugging
      console.log('Amount:', amount, 'Description:', description);
      
      // Generate QR URL based on the form values
      this.qrImageUrl = `https://img.vietqr.io/image/${this.bankId}-${this.accountNo}-pMY2wMz.jpg?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(this.accountName)}`;
      
      // Log the generated URL for debugging
      console.log('Generated QR URL:', this.qrImageUrl);
    } else {
      console.log('Form is invalid');
    }
  }
}
