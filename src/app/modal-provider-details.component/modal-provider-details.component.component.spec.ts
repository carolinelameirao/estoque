import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProviderDetails.ComponentComponent } from './modal-provider-details.component.component';

describe('ModalProviderDetails.ComponentComponent', () => {
  let component: ModalProviderDetails.ComponentComponent;
  let fixture: ComponentFixture<ModalProviderDetails.ComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProviderDetails.ComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProviderDetails.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
