import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodificarComponent } from './decodificar.component';

describe('DecodificarComponent', () => {
  let component: DecodificarComponent;
  let fixture: ComponentFixture<DecodificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
