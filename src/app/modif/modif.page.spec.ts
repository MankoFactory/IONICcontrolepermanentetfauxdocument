import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifPage } from './modif.page';

describe('ModifPage', () => {
  let component: ModifPage;
  let fixture: ComponentFixture<ModifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
