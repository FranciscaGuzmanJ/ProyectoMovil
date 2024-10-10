import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagEsperaPage } from './pag-espera.page';

describe('PagEsperaPage', () => {
  let component: PagEsperaPage;
  let fixture: ComponentFixture<PagEsperaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagEsperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
