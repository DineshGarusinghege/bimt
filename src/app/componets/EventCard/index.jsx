// components/EventCard.js
export default function EventCard({ date, title, time, location }) {
    return (
      <div className="flex items-start space-x-4 border-t border-gray-700 pt-4">
        <div className="text-center">
          <p className="text-lg font-semibold uppercase">{date}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-300 mt-1">A workshop on Capital Market was organized...</p>
          <p className="mt-2 font-bold">{time}</p>
          <p className="text-gray-400">{location}</p>
        </div>
      </div>
    )
  }
  