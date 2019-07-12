import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { ToolbarComponent } from './toolbar.component'

import { MatMenuModule, MatSelectModule } from '@angular/material'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { By } from '@angular/platform-browser'

describe('ToolbarComponent', () => {
  let component: ToolbarComponent
  let fixture: ComponentFixture<ToolbarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatMenuModule, MatSelectModule, NoopAnimationsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the toolbar', () => {
    expect(component).toBeTruthy()
  })

  it('should render title in a span tag', async(() => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('span').textContent).toContain(
      'Learn Academy',
    )
  }))

  it('should have a menu with 2 options (native click)', () => {
    const compiledDom = fixture.debugElement.nativeElement
    compiledDom.querySelector('button').click()
    fixture.detectChanges()
    expect(
      fixture.debugElement.queryAll(By.css('.mat-menu-item')).length,
    ).toEqual(2)
  })
})
