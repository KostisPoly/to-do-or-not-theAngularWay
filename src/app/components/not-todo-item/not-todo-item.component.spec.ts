import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTodoItemComponent } from './not-todo-item.component';

describe('NotTodoItemComponent', () => {
  let component: NotTodoItemComponent;
  let fixture: ComponentFixture<NotTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotTodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
