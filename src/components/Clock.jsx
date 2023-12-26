import React, { useState, useEffect } from 'react';
function Clock(){
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Dhaka', // Set timezone to Bangladesh
    };
    const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

    return <h5 className={'display-5 '}>This is the current time: <span className={'text-success'}>{formattedDateTime}</span></h5>
}
export default Clock