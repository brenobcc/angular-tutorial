import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgIfComponent } from './ig-if.component';

describe('IgIfComponent', () => {
  let component: IgIfComponent;
  let fixture: ComponentFixture<IgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
