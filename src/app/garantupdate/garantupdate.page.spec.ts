import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarantupdatePage } from './garantupdate.page';

describe('GarantupdatePage', () => {
  let component: GarantupdatePage;
  let fixture: ComponentFixture<GarantupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarantupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
