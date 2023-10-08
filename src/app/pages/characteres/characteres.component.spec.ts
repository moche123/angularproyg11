import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteresComponent } from './characteres.component';

describe('CharacteresComponent', () => {
  let component: CharacteresComponent;
  let fixture: ComponentFixture<CharacteresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacteresComponent]
    });
    fixture = TestBed.createComponent(CharacteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
