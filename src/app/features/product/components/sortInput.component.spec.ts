import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortInputComponent } from './sortInput.component';

describe('SortInputComponent', () => {
  let component: SortInputComponent;
  let fixture: ComponentFixture<SortInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
