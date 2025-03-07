
type Event = {
  image: string;
  name: string;
  date: string;
  location: string;
  description: string;
};

const FeaturedEvents: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <div className="w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
      <div className="flex gap-4 pb-4">
        {events.map((event, index: number) => (
          <div 
            key={index}
            className="min-w-[300px] rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src={event.image} 
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl">{event.name}</h3>
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.location}</span>
              </div>
              <p className="mt-2 text-gray-700 line-clamp-2">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
