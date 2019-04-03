import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder())
  });

  it('Form should have been created with two items', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('Form name should be requireds', () => {
    let control = component.form.get('name')
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});