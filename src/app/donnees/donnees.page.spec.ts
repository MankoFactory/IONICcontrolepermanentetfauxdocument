import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonneesPage } from './donnees.page';

describe('DonneesPage', () => {
  let component: DonneesPage;
  let fixture: ComponentFixture<DonneesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonneesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
