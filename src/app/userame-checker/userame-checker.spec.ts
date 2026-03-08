import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserameChecker } from './userame-checker';

describe('UserameChecker', () => {
  let component: UserameChecker;
  let fixture: ComponentFixture<UserameChecker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserameChecker],
    }).compileComponents();

    fixture = TestBed.createComponent(UserameChecker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UserameChecker);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

 
});