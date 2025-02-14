import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HttpClient } from '@angular/common/http';

interface WaitlistEntry {
  fullName: string;
  businessName: string;
  email: string;
  interests: string[];
  additionalInfo?: string;
  createdAt: Date;
}

@Component({
  selector: 'app-waitlist-entries',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './waitlist-entries.component.html',
  styleUrls: ['./waitlist-entries.component.css']
})
export class WaitlistEntriesComponent implements OnInit {
  entries: WaitlistEntry[] = [];
  filteredEntries: WaitlistEntry[] = [];
  isLoading = true;
  error = '';
  searchTerm = '';
  sortField: 'fullName' | 'businessName' | 'email' | 'createdAt' = 'createdAt';
  sortDirection: 'asc' | 'desc' = 'desc';
  pageSize = 10;
  currentPage = 1;
  selectedEntry: WaitlistEntry | null = null;
  Math = Math;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEntries();
  }

  fetchEntries() {
    this.http.get<WaitlistEntry[]>('http://localhost:3000/api/waitlist')
      .subscribe({
        next: (data) => {
          this.entries = data;
          this.applyFiltersAndSort();
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load waitlist entries';
          this.isLoading = false;
          console.error('Error fetching entries:', err);
        }
      });
  }

  applyFiltersAndSort() {
    // Apply search filter
    this.filteredEntries = this.entries.filter(entry =>
      entry.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      entry.businessName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      entry.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Apply sorting
    this.filteredEntries.sort((a, b) => {
      const aValue = a[this.sortField];
      const bValue = b[this.sortField];
      const direction = this.sortDirection === 'asc' ? 1 : -1;
      
      if (aValue < bValue) return -1 * direction;
      if (aValue > bValue) return 1 * direction;
      return 0;
    });
  }

  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  onSort(header: string) {
    const fieldMap: { [key: string]: 'fullName' | 'businessName' | 'email' | 'createdAt' } = {
      'name': 'fullName',
      'business': 'businessName',
      'email': 'email',
      'date': 'createdAt'
    };
    
    const field = fieldMap[header];
    if (field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortField = field;
        this.sortDirection = 'asc';
      }
      this.applyFiltersAndSort();
    }
  }

  get paginatedEntries() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredEntries.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredEntries.length / this.pageSize);
  }

  exportToCsv() {
    const headers = ['Full Name', 'Business Name', 'Email', 'Interests', 'Additional Info', 'Date'];
    const csvData = this.filteredEntries.map(entry => [
      entry.fullName,
      entry.businessName,
      entry.email,
      entry.interests.join('; '),
      entry.additionalInfo || '',
      new Date(entry.createdAt).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-entries-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  showEntryDetails(entry: WaitlistEntry) {
    this.selectedEntry = entry;
  }

  closeEntryDetails() {
    this.selectedEntry = null;
  }
} 