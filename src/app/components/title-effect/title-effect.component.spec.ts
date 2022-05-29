import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleEffectComponent } from './title-effect.component';

describe('TitleEffectComponent', () => {
  let component: TitleEffectComponent;
  let fixture: ComponentFixture<TitleEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
