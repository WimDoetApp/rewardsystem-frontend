import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetasksComponent } from './managetasks.component';

describe('ManagetasksComponent', () => {
  let component: ManagetasksComponent;
  let fixture: ComponentFixture<ManagetasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
