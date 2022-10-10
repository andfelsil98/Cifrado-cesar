import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificarComponent } from './codificar.component';

describe('CodificarComponent', () => {
  let component: CodificarComponent;
  let fixture: ComponentFixture<CodificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
