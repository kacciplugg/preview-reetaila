import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-onboarding',
    imports: [CommonModule, RouterLink],
    templateUrl: './onboarding.component.html',
    styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {}
