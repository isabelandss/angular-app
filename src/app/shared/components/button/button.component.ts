import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

export type Kind = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost'
export type Size = 'default' | 'small'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() label: string
  @Input() classname: string = ''
  @Input() kind: Kind = 'primary' as Kind
  @Input() size: Size = 'default' as Size
  @Input() disabled: boolean = false
  @Output() handleClick: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  get classnameButton(): string {
    return `button button--${this.kind} button--${this.size} ${this.classname}`
  }

  onClick(event: Event) {
    this.handleClick.emit(event)
  }
}
