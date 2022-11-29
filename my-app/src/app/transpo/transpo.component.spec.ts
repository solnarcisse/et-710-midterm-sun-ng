import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspoComponent } from './transpo.component';

describe('TranspoComponent', () => {
  let component: TranspoComponent;
  let fixture: ComponentFixture<TranspoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranspoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranspoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
