import Nav from '../atoms/Nav';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const TicketPage = () => {

    // const [startDate, setStartDate] = useState<Date | null>(null);
    // const [showDatePicker, setShowDatePicker] = useState(false);

    // const handleCalendarClick = () => {
    //     setShowDatePicker(!showDatePicker);
    // };
    return (
        <div>
            <Nav/>
            <div>
                <div className='image-holder'>
                    <input type="file" accept="image/*" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           if (e.target.files && e.target.files[0]) {
                            const img = document.createElement('img');
                            img.src = URL.createObjectURL(e.target.files[0]);
                            img.onload = () => {
                                URL.revokeObjectURL(img.src);
                            };
                            const imageHolder = document.querySelector('.image-holder');
                            if (imageHolder) {
                                imageHolder.innerHTML = '';
                                imageHolder.appendChild(img);
                            }
                        }
                     
                    }} />
                </div>

                <div className='event-form'>
                    <h1>Event Name</h1>
                    <p>Welcome to the ticket page. Here you can view and manage your tickets.</p>
                </div>
            </div>
        
        
        </div>
    );
};

export default TicketPage;