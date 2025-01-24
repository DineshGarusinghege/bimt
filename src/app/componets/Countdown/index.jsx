// components/Countdown.js
import { useState, useEffect } from 'react'

function calculateTimeLeft() {
  const eventDate = new Date("2023-11-23T00:00:00")
  const difference = eventDate - new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center bg-white text-indigo-900 p-6 rounded-lg shadow-lg mt-6">
      <h3 className="font-bold text-lg">Next Event</h3>
      <div className="text-2xl font-bold mt-2">
        {timeLeft.days || '0'}d {timeLeft.hours || '0'}h {timeLeft.minutes || '0'}m {timeLeft.seconds || '0'}s
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button className="border border-indigo-900 text-indigo-900 px-4 py-2 rounded-lg">View all events</button>
        <button className="border border-indigo-900 text-indigo-900 px-4 py-2 rounded-lg">Contact us</button>
      </div>
    </div>
  )
}
