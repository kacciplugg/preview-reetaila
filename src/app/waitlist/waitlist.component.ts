import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-waitlist',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './waitlist.component.html',
  styles: [],
})
export class WaitlistComponent {
  isSubmitting = false;
  errorMessage = '';
  showSuccessMessage = false;
  showErrorMessage = false;

  // Interest mapping for readable text
  private interestLabels = {
    website: 'Having my own website',
    products: 'Managing my products',
    customers: 'Reaching my customers easily',
    payments: 'Receiving payments online',
    analytics: "My business' analytics and stats",
  };

  // Update the API URL to match your Vercel backend
  private apiUrl = 'https://reetaila-api.vercel.app/api/waitlist';

  constructor(private router: Router, private http: HttpClient) {}

  formData = {
    fullName: '',
    businessName: '',
    email: '',
    interests: {
      website: false,
      products: false,
      customers: false,
      payments: false,
      analytics: false,
    },
    additionalInfo: '',
  };

  async onSubmit() {
    this.isSubmitting = true;
    this.errorMessage = '';
    this.showErrorMessage = false;
    this.showSuccessMessage = false;

    try {
      const formData = {
        fullName: this.formData.fullName,
        businessName: this.formData.businessName,
        email: this.formData.email,
        interests: this.formData.interests,
        additionalInfo: this.formData.additionalInfo,
      };

      console.log('Submitting form data:', formData);

      const response = await this.http
        .post<any>(this.apiUrl, formData)
        .toPromise();

      console.log('Server response:', response);
      this.showSuccessMessage = true;

      // Clear form after successful submission
      this.formData = {
        fullName: '',
        businessName: '',
        email: '',
        interests: {
          website: false,
          products: false,
          customers: false,
          payments: false,
          analytics: false,
        },
        additionalInfo: '',
      };

      // Add delay before navigation
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
      this.router.navigate(['/waitlist-success']);
    } catch (error: unknown) {
      console.error('Submission error:', error);
      this.showErrorMessage = true;
      const err = error as any;
      this.errorMessage =
        err.error?.details ||
        err.error?.error ||
        'Failed to submit form. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
