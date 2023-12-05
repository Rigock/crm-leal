import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesComponent } from './sales.component';
import { SalesService } from '../services/sales.service';
import { SharedLibService } from '@shared-lib';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;
  let salesService: SalesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesComponent],
      providers: [SalesService, SharedLibService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    salesService = TestBed.inject(SalesService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a defined single property', () => {
    expect(component.single).toBeDefined();
  });
  
  it('should have a defined horizontalChart property', () => {
    expect(component.horizontalChart).toBeDefined();
  });

  it('should log "Item clicked" on onSelect', () => {
    spyOn(console, 'log');
    const eventData = { };
    component.onSelect(eventData);
    expect(console.log).toHaveBeenCalledWith('Item clicked', eventData);
  });

});