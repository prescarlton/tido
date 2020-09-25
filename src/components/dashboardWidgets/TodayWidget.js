import React from 'react';
import moment from 'moment'
const TodayWidget = () => {

    const hour = moment().hour();
    let timeOfDay = '';
    console.log(hour);
    if (hour < 12) {
        timeOfDay = 'morning';
    } else if (hour < 17) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'evening';
    }
    const todayGreeting = 'Good ' + timeOfDay + ', Preston.'

    return (
        <div className='todayWidget'>
            <div className='todayWidget__left'>
                <h2 className='todayWidget__location'>Charleston, SC</h2>
                <h1 className='todayWidget__temp'>134&deg;</h1>
                <h2 className='todayWidget__date'>Wednesday, Aug 3<span className='weatherWidget__date__ordinal'>rd</span></h2>
            </div>
            <h1 className='todayWidget__dueToday'>{todayGreeting}</h1>
            <div className='todayWidget__dayPicker'>
                <h4 className='todayWidget__day'>Yesterday</h4>
                <h2 className='todayWidget__day--selected todayWidget__day '>Today</h2>
                <h4 className='todayWidget__day'>Tomorrow</h4>
            </div>
        </div>
    )
}
export default TodayWidget;