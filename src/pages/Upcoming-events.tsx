import React, {useState, useEffect} from 'react';
import Buttons from '../atoms/Buttons';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import Nav from '../atoms/Nav';
import SearchBar from '../atoms/Searchbar';


const UpcomingEvents: React.FC = () => {
    const [events, setEvents] = useState<{ id: number, name: string, date: string, location: string, time: string, image: string }[]>([]);
    const [query, setQuery] = useState<string>('');


    useEffect(() => {
        const sampleEvents = [
            {
                id: 1,
                name: 'Event One',
                date: '2023-10-01',
                location: 'New York',
                time: '2023-10-01T18:00:00Z',
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 2,
                name: 'Event Two',
                date: '2023-11-15',
                location: 'Los Angeles',
                time: '2023-11-15T20:00:00Z',
                image: 'https://via.placeholder.com/150'
            },
            {
                id: 3,
                name: 'Event Three',
                date: '2023-12-05',
                location: 'Chicago',
                time: '2023-12-05T19:00:00Z',
                image: 'https://via.placeholder.com/150'
            }
        ];
        setEvents(sampleEvents);
    }, []);

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
        <Nav />
        <div className='font-custom bg-[#000022] text-[#ffffff] w-full min-h-screen'>
            <h1 className='text-4xl text-center my-8'>Upcoming Events</h1>
          
            <SearchBar query={query} setQuery={setQuery}  />
            <ul className='grid gap-4 px-8 w-full'>
                {filteredEvents.map(event => (
                    <li key={event.id} className='flex flex-row items-center bg-[#010131] p-4 rounded-md w-full justify-between'>
                        <img src={event.image} alt={event.name} className='w-40 h-40 object-cover rounded-md' />
                        <div className='flex flex-col items-center mt-4 w-1/2'>
                            <h2 className='text-2xl mb-2'>{event.name}</h2>
                            <Buttons name='Get Tickets' link={'/events/:id'} />
                        </div>
                        <div className='text-[#ffffff] mt-4 w-[20%]'>
                        <span className='flex items-center gap-2'>
                                <FaCalendarAlt className='text-[#00ffff]' />
                                <p>{new Date(event.time).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </span>
                            <span className='flex items-center gap-2 mt-2'>
                                <IoTimeOutline className='text-[#00ffff]' />
                                <p>{new Date(event.time).toLocaleTimeString()}</p>
                            </span>
                            <span className='flex items-center gap-2 mt-2'>
                                <FaLocationDot className='text-[#00ffff]' />
                                <p>{event.location}</p>
                            </span>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        </>
    );
};

export default UpcomingEvents;