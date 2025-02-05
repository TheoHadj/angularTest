import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuenfantComponent } from './commuenfant.component';

describe('CommuenfantComponent', () => {
  let component: CommuenfantComponent;
  let fixture: ComponentFixture<CommuenfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommuenfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
