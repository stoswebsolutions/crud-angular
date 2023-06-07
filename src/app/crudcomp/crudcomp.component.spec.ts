import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcompComponent } from './crudcomp.component';

describe('CrudcompComponent', () => {
  let component: CrudcompComponent;
  let fixture: ComponentFixture<CrudcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudcompComponent]
    });
    fixture = TestBed.createComponent(CrudcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
