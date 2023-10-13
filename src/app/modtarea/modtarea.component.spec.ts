import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModtareaComponent } from './modtarea.component';

describe('ModtareaComponent', () => {
  let component: ModtareaComponent;
  let fixture: ComponentFixture<ModtareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModtareaComponent]
    });
    fixture = TestBed.createComponent(ModtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
