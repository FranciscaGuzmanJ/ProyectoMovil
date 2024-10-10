import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumesPage } from './albumes.page';

describe('AlbumesPage', () => {
  let component: AlbumesPage;
  let fixture: ComponentFixture<AlbumesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
