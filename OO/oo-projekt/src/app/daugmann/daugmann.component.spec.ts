import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaugmannComponent } from './daugmann.component';

describe('DaugmannComponent', () => {
  let component: DaugmannComponent;
  let fixture: ComponentFixture<DaugmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaugmannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaugmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
