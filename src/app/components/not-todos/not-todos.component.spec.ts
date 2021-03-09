import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTodosComponent } from './not-todos.component';

describe('NotTodosComponent', () => {
  let component: NotTodosComponent;
  let fixture: ComponentFixture<NotTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
