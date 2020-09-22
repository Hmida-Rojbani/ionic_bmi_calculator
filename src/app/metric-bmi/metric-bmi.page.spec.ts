import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetricBmiPage } from './metric-bmi.page';

describe('MetricBmiPage', () => {
  let component: MetricBmiPage;
  let fixture: ComponentFixture<MetricBmiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricBmiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetricBmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
