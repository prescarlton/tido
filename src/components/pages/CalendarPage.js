import React from 'react';
import PageTitle from '../atoms/PageTitle';
import * as moment from 'moment/moment';

const dateObject = moment();

const DaysHeader = () => {

    // const shortWeekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const shortWeekDays = moment.weekdaysShort();
    return (
        <tr className='weekDays__container'>
            {shortWeekDays.map((day) => (
                <th className='weekDay' key={day}>
                    <div className='weekDay__inner'>
                        {day}
                    </div>
                </th>
            )
            )}
        </tr>
    )
};

const CalendarBody = () => {
    // find out what first day of month is, 
    // and create the required number of blank day cells
    let firstDayOfMonth = () => moment(dateObject).startOf('month').format('d');
    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
            <td className="calendarDay empty">{""}</td>
        );
    }
    // create a list of all days in the month
    let monthDays = [];
    for (let d = 1; d <= moment(dateObject).daysInMonth(); d++) {
        monthDays.push(
            <td key={d} className={`calendarDay ${moment(dateObject).date() === d ? 'calendarDay--today' : ''}`}>
                <div className={`calendarDay__content `}>
                    {d}
                </div>
            </td>
        );
    }
    // list of all cells to be created, 
    // including blanks and actual days
    const totalSlots = [...blanks, ...monthDays];
    let rows = [];
    let cells = [];

    // loop thru all cells and push to correct list
    totalSlots.forEach((cell, i) => {
        if (i % 7 !== 0) {
            cells.push(cell); // if index not equal 7, don't go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows 
            cells = []; // empty container 
            cells.push(cell); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
            rows.push(cells);
        }
    });
    let daysinmonth = rows.map(d => {
        return (d && (<tr>{d}</tr>));
    });

    return (
        <tbody>
            {daysinmonth}
        </tbody>
    )

}

const CalendarPage = () => {
    return (
        <div className='page calendarPage'>
            <h2 className='calendar__monthHeader'>{moment().format('MMMM YYYY')}</h2>
            <table className='calendar'>
                <DaysHeader />
                <CalendarBody />
            </table>
        </div>
    )
}

export default CalendarPage;