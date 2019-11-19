// module
import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';

// local
import styles from './DatePicker.module.scss';


const DayPicker = ({ onSetArrivalDate, onSetDepartureDate }) => {
  const [from, setFrom] = React.useState(undefined);
  const [to, setTo] = React.useState(undefined);

  const toEl = React.useRef()

  const showFromMonth = () => {
    if (!from) return;
    if (moment(to).diff(moment(from), 'months') < 2) {
      toEl.current.getDayPicker().showMonth(from);
    }
  }

  const handleFromChange = (from) => {
    setFrom(from)
    onSetArrivalDate(from.toISOString())
  }

  const handleToChange = (to) => {
    setTo(to);
    onSetDepartureDate(to.toISOString())
    showFromMonth();
  }
  const modifiers = { start: from, end: to };

  return (
    <div className={ styles.input }>
      <label className={ styles.title }>{'Dates'}</label>
      <DayPickerInput
        value={from}
        placeholder="From"
        format="LL"
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{
          selectedDays: [from, { from, to }],
          disabledDays: { after: to },
          toMonth: to,
          modifiers,
          numberOfMonths: 2,
          onDayClick: () => toEl.current.getInput().focus(),
        }}
        onDayChange={handleFromChange}
      />{' '}
      —{' '}
      <span className="InputFromTo-to">
        <DayPickerInput
          ref={toEl}
          value={to}
          placeholder="To"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            modifiers,
            month: from,
            fromMonth: from,
            numberOfMonths: 2,
          }}
          onDayChange={handleToChange}
        />
      </span>
    </div>
  );
}

export default DayPicker;