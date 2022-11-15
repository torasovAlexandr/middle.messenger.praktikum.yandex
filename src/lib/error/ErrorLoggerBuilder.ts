import ConsoleLoggerAdapter from './adapter/ConsoleLoggerAdapter'
import { errorMessages } from '../../config/errorMessages'
import AlertLoggerAdapter from './adapter/AlertLoggerAdapter'
import { isEmpty } from '../helpers/myDash'
import { IErrorLoggerBuilder, ErrorLoggerBuilderOptions } from './types'

export default class ErrorLoggerBuilder implements IErrorLoggerBuilder {
  error
  message
  adapters: IErrorLoggerBuilder['adapters']

  constructor(options: ErrorLoggerBuilderOptions) {
    const { error } = options

    this.error = error

    if (error instanceof Error) this.message = error.message
    else this.message = error

    this.adapters = {}
  }

  toAlert() {
    this.adapters.alertAdapter = new AlertLoggerAdapter(this.message)

    return this
  }

  toConsoleLogAdapter() {
    this.adapters.consoleLogAdapter = new ConsoleLoggerAdapter(this.error)

    return this
  }

  build() {
    if (isEmpty(this.adapters)) throw new Error(errorMessages.arrayErrors.NO_ITEMS_TO_ITERATE)

    Object.values(this.adapters).forEach((adapter) => adapter.logError())
  }
}
