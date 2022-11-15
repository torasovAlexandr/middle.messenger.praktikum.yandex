import Block from '../../../lib/dom/Block'
import template from './template.hbs'
import './style.css'
import { InputProps } from '../input/types'
import { Input } from '../input'

export class ValidatedInput extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props)
  }

  init() {
    this.children.input = new Input(this.props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
