import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancementsComponent } from './lancements.component';

describe('LancementsComponent', () => {
  let component: LancementsComponent;
  let fixture: ComponentFixture<LancementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
