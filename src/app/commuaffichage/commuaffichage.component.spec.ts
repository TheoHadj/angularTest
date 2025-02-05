import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuaffichageComponent } from './commuaffichage.component';

describe('CommuaffichageComponent', () => {
  let component: CommuaffichageComponent;
  let fixture: ComponentFixture<CommuaffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommuaffichageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommuaffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
