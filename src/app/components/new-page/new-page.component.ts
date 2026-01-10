import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageService } from '../../services/backend.service';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
})
export class NewPageComponent {
  data: any;
  loading: boolean = false;
  error: any = null;

  constructor(private newPageService: NewPageService) {}

  fetchData() {
    this.loading = true;
    this.newPageService.getData().subscribe({
      next: (response) => {
        console.log('Raj API Response:', response);
        const results =
          response?.results ??
          response?.data ??
          (Array.isArray(response) ? response : null);
        this.data = Array.isArray(results) ? results : results ? [results] : [];
        this.loading = false;
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      },
    });
  }
}
