import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHistoriaComponent } from './buscar-historia.component';

describe('BuscarHistoriaComponent', () => {
  let component: BuscarHistoriaComponent;
  let fixture: ComponentFixture<BuscarHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarHistoriaComponent]
    });
    fixture = TestBed.createComponent(BuscarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
