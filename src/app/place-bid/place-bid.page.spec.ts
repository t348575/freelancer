import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceBidPage } from './place-bid.page';

describe('PlaceBidPage', () => {
  let component: PlaceBidPage;
  let fixture: ComponentFixture<PlaceBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceBidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
