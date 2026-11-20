import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter stocks by partial, case-insensitive name', () => {
    component.searchTerm = 'bank';
    component.searchStock();
    expect(component.filteredStocks.map((s) => s.name)).toEqual(['HDFCBANK', 'ICICIBANK']);
  });

  it('should show all stocks again when searching with an empty term', () => {
    component.searchTerm = 'tcs';
    component.searchStock();
    expect(component.filteredStocks.length).toBe(1);

    component.searchTerm = '';
    component.searchStock();
    expect(component.filteredStocks.length).toBe(component.stocks.length);
  });

  it('should show a message when no stocks match', async () => {
    component.searchTerm = 'xyz';
    component.searchStock();
    fixture.componentRef.changeDetectorRef.markForCheck();
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('No matching stocks found.');
  });

  it('should color negative changes red and positive changes green', async () => {
    component.stocks = [
      { name: 'UP', price: 100, change: '+1.00%' },
      { name: 'DOWN', price: 100, change: '-2.00%' },
    ];
    component.filteredStocks = [...component.stocks];
    fixture.componentRef.changeDetectorRef.markForCheck();
    await fixture.whenStable();
    const changes = fixture.nativeElement.querySelectorAll('.stock-card p');
    expect(changes[0].className).toBe('positive');
    expect(changes[1].className).toBe('negative');
  });
});
