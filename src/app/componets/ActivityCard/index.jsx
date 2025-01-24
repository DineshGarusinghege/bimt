import Image from "next/image";

// components/ActivityCard.js
export default function ActivityCard({ activity }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image className="w-full h-48 object-cover" src={activity.imageUrl} alt={activity.title} />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-indigo-900">{activity.title}</h3>
          <p className="text-gray-700 mt-4 text-sm">{activity.description}</p>
        </div>
      </div>
    )
  }
  