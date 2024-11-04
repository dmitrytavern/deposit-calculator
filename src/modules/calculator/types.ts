import { z } from 'zod'

import { formSchema } from './schemas'

export type FormSchema = z.infer<typeof formSchema>
export type FormFieldKeys = keyof typeof formSchema.shape
export type FormFieldSchema<Field extends FormFieldKeys> = FormSchema[Field]

export type Form = {
  [Field in FormFieldKeys]: FormFieldSchema<Field>
}

export type FormError = {
  error?: boolean
  errorMessage?: string | undefined
}

export type FormErrors = {
  [Field in FormFieldKeys]?: FormError
}

export interface FormField<Field extends FormFieldKeys> extends FormError {
  value: FormFieldSchema<Field>
  onChange(value: FormFieldSchema<Field>): void
}

export interface FormResult {
  rate: number
  rateAfterTax: number
  totalAmount: number
  totalTaxAmount: number
  totalPercentAmount: number
  totalInvestedAmount: number
}

export interface Calculation {
  year: number
  month: number
  workDays: number
  startWorkDay: number
  endWorkDay: number
  investment: number
  balance: number
  income: number
  tax: number
}
