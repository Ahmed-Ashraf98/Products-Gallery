import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingProductCardComponent } from './loadingProductCard.component';

describe('LoadingProductCardComponent', () => {
  let component: LoadingProductCardComponent;
  let fixture: ComponentFixture<LoadingProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
