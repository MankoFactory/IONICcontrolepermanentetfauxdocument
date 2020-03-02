import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarantlistePage } from './garantliste.page';

describe('GarantlistePage', () => {
  let component: GarantlistePage;
  let fixture: ComponentFixture<GarantlistePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantlistePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarantlistePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
