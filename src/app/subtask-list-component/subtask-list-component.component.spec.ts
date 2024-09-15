import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskListComponentComponent } from './subtask-list-component.component';

describe('SubtaskListComponentComponent', () => {
  let component: SubtaskListComponentComponent;
  let fixture: ComponentFixture<SubtaskListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtaskListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtaskListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
