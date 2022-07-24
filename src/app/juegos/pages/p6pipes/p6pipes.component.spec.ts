import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6pipesComponent } from './p6pipes.component';

describe('P6pipesComponent', () => {
  let component: P6pipesComponent;
  let fixture: ComponentFixture<P6pipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P6pipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P6pipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
