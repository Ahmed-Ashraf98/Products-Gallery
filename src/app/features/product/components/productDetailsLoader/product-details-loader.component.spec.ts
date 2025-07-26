import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsLoaderComponent } from './product-details-loader.component';

describe('ProductDetailsLoaderComponent', () => {
  let component: ProductDetailsLoaderComponent;
  let fixture: ComponentFixture<ProductDetailsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
