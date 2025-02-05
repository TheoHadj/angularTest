import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuparentComponent } from './commuparent.component';

describe('CommuparentComponent', () => {
  let component: CommuparentComponent;
  let fixture: ComponentFixture<CommuparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommuparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
