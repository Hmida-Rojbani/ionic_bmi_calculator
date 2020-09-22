import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImperialPage } from './imperial.page';

describe('ImperialPage', () => {
  let component: ImperialPage;
  let fixture: ComponentFixture<ImperialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImperialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
