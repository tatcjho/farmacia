import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JosePage } from './jose.page';

describe('JosePage', () => {
  let component: JosePage;
  let fixture: ComponentFixture<JosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
