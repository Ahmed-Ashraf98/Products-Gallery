import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomRaitingComponent } from './customRaiting.component';

describe('CustomRaitingComponent', () => {
  let component: CustomRaitingComponent;
  let fixture: ComponentFixture<CustomRaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRaitingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomRaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
