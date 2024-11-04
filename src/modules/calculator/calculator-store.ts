import { makeAutoObservable, runInAction } from 'mobx'

import { formSchema } from './schemas'
import type {
  Form,
  FormErrors,
  FormResult,
  FormField,
  FormFieldKeys,
  FormFieldSchema,
} from './types'
import { calculate } from './utils/calculation'

export class CalculatorStore {
  private readonly _formErrors: FormErrors
  private readonly _form: Form
  private _result: FormResult | undefined

  public readonly currencies: [string, string][]

  constructor() {
    this._result = undefined
    this._formErrors = {}
    this._form = {
      rate: 14.5,
      period: 12,
      amount: 1000,
      date: new Date(),
      tax: 19.5,
      taxIsActive: false,
      replenishment: 1000,
      replenishmentIsActive: false,
      capitalizationIsActive: false,
      currency: 'UAH',
    }

    this.currencies = [
      ['UAH', '₴'],
      ['USD', '$'],
      ['EUR', '€'],
    ]

    for (const key in this._form) {
      this.validateField(key as FormFieldKeys)
    }

    this.calculate()

    makeAutoObservable(this)
  }

  get form(): Form {
    return { ...this._form }
  }

  get formIsValid(): boolean {
    for (const key in this._formErrors)
      if (this._formErrors[key as FormFieldKeys]?.error) return false
    return true
  }

  get result(): Readonly<FormResult> | undefined {
    return this._result
  }

  get resultIsValid(): boolean {
    return !!this._result
  }

  get currencySymbol(): string {
    const currency = this.currencies.find((v) => v[0] === this._form.currency)
    if (!currency) return '?'
    return currency[1]
  }

  public getField<Field extends FormFieldKeys>(field: Field): FormField<Field> {
    return {
      value: this._form[field],
      error: this._formErrors[field]?.error,
      errorMessage: this._formErrors[field]?.errorMessage,
      onChange: (value: FormFieldSchema<Field>) =>
        runInAction(() => {
          this._form[field] = value
          this.validateField(field)
          this.calculate()
        }),
    }
  }

  private validateField<Field extends FormFieldKeys>(field: Field) {
    const value = this._form[field]
    const error = formSchema.shape[field].safeParse(value)
    this._formErrors[field] = {
      error: !error.success,
      errorMessage: error.error?.issues[0].message,
    }
  }

  private calculate() {
    if (this.formIsValid) {
      this._result = calculate(this.form)
    }
  }
}
