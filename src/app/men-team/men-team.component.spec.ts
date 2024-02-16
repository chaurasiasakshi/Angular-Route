import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenTeamComponent } from './men-team.component';

describe('MenTeamComponent', () => {
  let component: MenTeamComponent;
  let fixture: ComponentFixture<MenTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
