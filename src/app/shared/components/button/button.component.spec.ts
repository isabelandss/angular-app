/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('.button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set label', () => {
    component.label = 'i\'m a button';
    fixture.detectChanges();

    expect(button.nativeElement.textContent).toEqual('i\'m a button');
  })

  describe('.classnameButton', () => {
    it('should get default classname', () => {
      const expected = "button button--primary button--default ";

      expect(component.classnameButton).toEqual(expected);
      expect(button.nativeElement.className).toEqual(expected);
    });
  
    it('should add other classname', () => {
      component.classname = 'my-class'
      const expected = "my-class"
      fixture.detectChanges();

      expect(component.classnameButton).toContain(expected);
      expect(button.nativeElement.className).toContain(expected);
    });
  
    it('should get classname with kind', () => {
      component.kind = 'secondary'
      const expected = "button--secondary";
      fixture.detectChanges();

      expect(component.classnameButton).toContain(expected);
      expect(button.nativeElement.className).toContain(expected);
    });
  
    it('should get classname with size', () => {
      component.size = 'small';
      const expected = "button--small";
      fixture.detectChanges();

      expect(component.classnameButton).toContain(expected);
      expect(button.nativeElement.className).toContain(expected);
    });
  });

  describe('.onClick', () => {
    let button
    let nativeElement

    beforeEach(() => {
      spyOn(component.handleClick, 'emit')
      
      nativeElement = fixture.nativeElement;
      button = nativeElement.querySelector('button');

      fixture.detectChanges();
    })

    it('should handle click', () => {
      button.dispatchEvent(new Event('click'));
      expect(component.handleClick.emit).toHaveBeenCalled()
    });
  })
});
