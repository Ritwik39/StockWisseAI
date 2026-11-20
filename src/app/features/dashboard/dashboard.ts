import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Stock {
  name: string;
  price: number;
  change: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  searchTerm: string = '';

  stocks: Stock[] = [
    { name: 'RELIANCE', price: 1450, change: '+1.10%' },
    { name: 'TCS', price: 3800, change: '+0.85%' },
    { name: 'INFY', price: 1650, change: '+1.25%' },
    { name: 'HDFCBANK', price: 1750, change: '+0.65%' },
    { name: 'ICICIBANK', price: 1250, change: '+0.95%' },
  ];

  filteredStocks: Stock[] = [...this.stocks];

  searchStock(): void {
    const term = this.searchTerm.trim().toUpperCase();

    this.filteredStocks = this.stocks.filter((stock) => stock.name.includes(term));
  }
}
