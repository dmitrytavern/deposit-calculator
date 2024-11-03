import { makeAutoObservable, runInAction } from 'mobx'
import { z } from 'zod'

import { formSchema } from './schemas'

type StateSchema = z.infer<typeof formSchema>
type StateFields = keyof typeof formSchema.shape
type State = {
  readonly [Property in StateFields]: {
    value: StateSchema[Property]
    error?: boolean
    errorMessage?: string | undefined
  }
}

export class CalculatorStore {
  private readonly state: State

  constructor() {
    this.state = {
      rate: { value: 14.5 },
      period: { value: 12 },
      amount: { value: 1000 },
      date: { value: new Date() },
      tax: { value: 19.5 },
      taxIsActive: { value: false },
      replenishment: { value: 1000 },
      replenishmentIsActive: { value: false },
      capitalizationIsActive: { value: false },
    }

    for (const key in this.state) {
      this.validateField(key as StateFields)
    }

    makeAutoObservable(this)
  }

  get stateForm(): StateSchema {
    return {
      rate: this.state.rate.value,
      period: this.state.period.value,
      amount: this.state.amount.value,
      date: this.state.date.value,
      tax: this.state.tax.value,
      taxIsActive: this.state.taxIsActive.value,
      replenishment: this.state.replenishment.value,
      replenishmentIsActive: this.state.replenishmentIsActive.value,
      capitalizationIsActive: this.state.capitalizationIsActive.value,
    }
  }

  get stateFormIsValid(): boolean {
    for (const key in this.state)
      if (this.state[key as StateFields].error) return false
    return true
  }

  public getField<Field extends StateFields>(
    field: Field,
  ): State[Field] & { onChange(value: StateSchema[Field]): void } {
    const onChange = (value: StateSchema[Field]) => {
      runInAction(() => {
        this.state[field].value = value
      })
      this.validateField(field)
    }

    return { ...this.state[field], onChange }
  }

  private validateField<Field extends StateFields>(field: Field) {
    const error = formSchema.shape[field].safeParse(this.state[field].value)
    this.state[field].error = !error.success
    this.state[field].errorMessage = error.error?.issues[0].message
  }
}
