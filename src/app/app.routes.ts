import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CompanyComponent } from './company/company.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PendingComponent } from './pending/pending.component';
import { BusinessComponent } from './business/business.component';
import { InventoryComponent } from './inventory/inventory.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { WaitlistSuccessComponent } from './waitlist-success/waitlist-success.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'pending', component: PendingComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'waitlist', component: WaitlistComponent },
  { path: 'waitlist-success', component: WaitlistSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
