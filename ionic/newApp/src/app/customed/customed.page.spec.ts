import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomedPage } from './customed.page';

describe('CustomedPage', () => {
  let component: CustomedPage;
  let fixture: ComponentFixture<CustomedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
