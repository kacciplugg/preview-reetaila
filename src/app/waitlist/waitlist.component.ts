import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WaitlistService } from '../services/waitlist.service';
import { filter } from 'rxjs/operators';
import { ScrollService } from '../services/scroll.service';

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

  formErrors = {
    fullName: '',
    businessName: '',
    email: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private waitlistService: WaitlistService,
    private scrollService: ScrollService
  ) {
    // Listen for navigation events
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  formData = {
    fullName: '',
    businessName: '',
    email: '',
    interests: {
      website: 'Having my own website',
      products: 'Managing my products',
      customers: 'Reaching my customers easily',
      payments: 'Receiving payments online',
      analytics: "My business' analytics and stats",
    } as Record<string, string>,
    selectedInterests: [] as string[],
    additionalInfo: '',
  };

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = {
      fullName: '',
      businessName: '',
      email: '',
    };

    if (!this.formData.fullName?.trim()) {
      this.formErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!this.formData.businessName?.trim()) {
      this.formErrors.businessName = 'Business name is required';
      isValid = false;
    }

    if (!this.formData.email?.trim()) {
      this.formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
      this.formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    return isValid;
  }

  async onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.showErrorMessage = false;
    this.showSuccessMessage = false;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Get the selected interest strings directly
      const selectedInterests = this.formData.selectedInterests.map(
        (key) => this.formData.interests[key]
      );

      const formData = {
        fullName: this.formData.fullName.trim(),
        businessName: this.formData.businessName.trim(),
        email: this.formData.email.trim().toLowerCase(),
        interests: selectedInterests,
        additionalInfo: this.formData.additionalInfo.trim(),
      };

      console.log('Submitting form data:', formData);

      this.waitlistService.joinWaitlist(formData).subscribe({
        next: async (response) => {
          console.log('Successfully joined waitlist', response);
          this.showSuccessMessage = true;

          // Reset form
          this.formData = {
            fullName: '',
            businessName: '',
            email: '',
            interests: {
              website: 'Having my own website',
              products: 'Managing my products',
              customers: 'Reaching my customers easily',
              payments: 'Receiving payments online',
              analytics: "My business' analytics and stats",
            } as Record<string, string>,
            selectedInterests: [],
            additionalInfo: '',
          };

          // Wait for submission animation
          await new Promise((resolve) => setTimeout(resolve, 1500));

          // Reset scroll and navigate
          this.scrollService.resetScroll();
          await this.router.navigate(['/waitlist-success']);
        },
        error: (error) => {
          console.error('Error joining waitlist', error);
          this.showErrorMessage = true;
          this.errorMessage =
            error.error?.error || 'Failed to submit form. Please try again.';
        },
        complete: () => {
          this.isSubmitting = false;
        },
      });
    } catch (error) {
      this.errorMessage = 'An unexpected error occurred';
      this.isSubmitting = false;
    }
  }

  onInterestChange(interest: string, event: any) {
    if (event.target.checked) {
      this.formData.selectedInterests.push(interest);
    } else {
      this.formData.selectedInterests = this.formData.selectedInterests.filter(
        (item) => item !== interest
      );
    }
  }
}
