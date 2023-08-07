import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule] // Import RouterTestingModule for routing testing
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should navigate to home when logo is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate'); // Spy on the router's navigate method
    const logoContainer = fixture.nativeElement.querySelector('.logo-container'); // Adjust the selector as needed

    logoContainer.click(); // Simulate a click on the logo container

    expect(navigateSpy).toHaveBeenCalledWith(['/']); // Check that the router's navigate method was called with the expected route
  });
});
