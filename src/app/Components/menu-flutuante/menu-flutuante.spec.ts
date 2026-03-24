import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFlutuante } from './menu-flutuante';

describe('MenuFlutuante', () => {
  let component: MenuFlutuante;
  let fixture: ComponentFixture<MenuFlutuante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuFlutuante],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuFlutuante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
