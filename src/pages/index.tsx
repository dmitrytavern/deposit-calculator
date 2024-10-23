import { useEffect, useState } from 'react'

import { isLeapYear } from '@/uitls/date'

export default function Home() {
  const [rate] = useState(16)
  const [depositDate] = useState(new Date(2024, 6, 1))
  const [depositPeriod] = useState(24)
  const [depositAmount] = useState(10000)
  const [capitalization, setCapitalization] = useState(true)

  const [calculations, setCalculations] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const calculationsTemp = []
    let totalAmountTemp = 0

    for (let i = 0; i <= depositPeriod; i++) {
      const currentDate = new Date(depositDate)
      currentDate.setMonth(depositDate.getMonth() + i)

      const year = currentDate.getFullYear()
      const month = currentDate.getMonth() + 1

      const amount =
        capitalization && calculationsTemp.length
          ? calculationsTemp[calculationsTemp.length - 1].amount
          : depositAmount

      const incomePerDay =
        (amount * (rate / 100)) / (isLeapYear(year) ? 366 : 355)

      let days = new Date(year, month, 0).getDate()

      if (i === 0) {
        days = days - depositDate.getDate()
      }

      if (i === depositPeriod) {
        days = depositDate.getDate()
      }

      const income = +(incomePerDay * days).toFixed(4)

      calculationsTemp.push({
        year,
        month,
        days: days,
        amount: amount + income,
        income,
      })

      totalAmountTemp += income
    }

    setCalculations(calculationsTemp)
    setTotalAmount(totalAmountTemp)
  }, [rate, depositDate, depositPeriod, depositAmount, capitalization])

  return (
    <div>
      <h3 className="mb-1 font-bold">Input</h3>
      <div>Rate: {rate}</div>
      <div>Date: {depositDate.toString()}</div>
      <div>Period: {depositPeriod}</div>
      <div>Amount: {depositAmount}</div>
      <div>
        Capitalization: {capitalization ? 'Yes' : 'No'}{' '}
        <span onClick={() => setCapitalization(!capitalization)}>toggle</span>
      </div>
      <h3 className="mt-5 mb-1 font-bold">Output</h3>
      {calculations.map((calculation) => (
        <div key={`${calculation.year}-${calculation.month}`}>
          {`${calculation.year}-${calculation.month}`} ({calculation.days}{' '}
          days): {calculation.income}
        </div>
      ))}
      <div>Total amount: {totalAmount}</div>
    </div>
  )
}
