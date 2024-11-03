import { z } from 'zod'

export const formSchema = z.object({
  rate: z
    .number({
      required_error: "Ставка є обов'язковим полем",
      invalid_type_error: 'Ставка має бути числом',
    })
    .min(0.01, { message: 'Ставка повинна бути не меншою за 0.01' })
    .max(100, { message: 'Ставка повинна бути не більшою за 100' })
    .refine((value) => value !== null && value !== undefined, {
      message: "Ставка є обов'язковим полем",
    }),

  period: z
    .number({
      required_error: "Період є обов'язковим полем",
      invalid_type_error: 'Період має бути числом',
    })
    .int({ message: 'Період має бути цілим числом' })
    .min(1, { message: 'Період повинен бути не меншим за 1 місяць' })
    .max(120, { message: 'Період повинен бути не більшим за 120 місяців' }),

  amount: z
    .number({
      required_error: "Сума є обов'язковим полем",
      invalid_type_error: 'Сума має бути числом',
    })
    .min(1, { message: 'Сума повинна бути не меншою за 1' })
    .max(Number.MAX_SAFE_INTEGER, {
      message: 'Сума перевищує максимальне допустиме значення',
    }),

  date: z
    .date({
      required_error: "Дата є обов'язковим полем",
      invalid_type_error: 'Дата має бути правильною датою',
    })
    .min(new Date('2000-01-01'), {
      message: 'Дата не може бути раніше 1 січня 2000 року',
    })
    .max(new Date('2100-12-31'), {
      message: 'Дата не може бути пізніше 31 грудня 2100 року',
    }),

  tax: z
    .number({
      invalid_type_error: 'Податок має бути числом',
    })
    .min(0.01, { message: 'Податок повинен бути не меншим за 0.01' })
    .max(100, { message: 'Податок повинен бути не більшим за 100' }),

  replenishment: z
    .number({
      invalid_type_error: 'Поповнення має бути числом',
    })
    .min(1, { message: 'Поповнення повинно бути не меншим за 1' })
    .max(Number.MAX_SAFE_INTEGER, {
      message: 'Поповнення перевищує максимальне допустиме значення',
    }),

  taxIsActive: z.boolean(),
  replenishmentIsActive: z.boolean(),
  capitalizationIsActive: z.boolean(),
})
