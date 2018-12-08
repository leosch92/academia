import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDeTreinoComponent } from './dia-de-treino.component';

describe('DiaDeTreinoComponent', () => {
  let component: DiaDeTreinoComponent;
  let fixture: ComponentFixture<DiaDeTreinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaDeTreinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaDeTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
