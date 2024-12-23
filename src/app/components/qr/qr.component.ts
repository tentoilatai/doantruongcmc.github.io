import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css'],
  imports: [ReactiveFormsModule, CommonModule],  // Import thêm CommonModule
  standalone: true
})
export class QrComponent {
  qrForm: FormGroup;
  qrImageUrl: string | null = null;


  private readonly bankId = '970422';
  private readonly accountNo = '2004';
  private readonly accountName = 'DOAN TNCS HCM TRUONG DH CMC';

  constructor(private fb: FormBuilder) {
    this.qrForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  generateQR(): void {
    if (this.qrForm.valid) {
      const { description, amount } = this.qrForm.value;
      console.log('Số tiền ủng hộ:', amount, 'Description:', description);
      
      this.qrImageUrl = `https://img.vietqr.io/image/${this.bankId}-${this.accountNo}-pMY2wMz.jpg?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(this.accountName)}`;
      
      console.log('Generated QR URL:', this.qrImageUrl);
    } else {
      console.log('Form is invalid');
    }
  }
}