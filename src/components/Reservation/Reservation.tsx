// modules
import * as React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { ReservationQuery } from '../../generated/graphql';

// local
import backImg from '../../static/back-button.png';
import styles from './Reservation.module.scss';

interface Props {
  data: ReservationQuery;
}

const Reservation: React.FC<Props> = ({ data }) => (
  <React.Fragment>
    <div className={ styles.back }>
      <Link to={ '/' } className={ styles.link }>
        <img src={ backImg } alt={'back'} />
        <p>{ 'Back' }</p>
      </Link>
    </div>
    <div className={ styles.reservation }>
    <h2 className={ styles.title }>{ 'Reservation Details' }</h2>
    <div className={ styles.container }>
      <div className={ styles.row }>
        <h4>{'Hotel name'}</h4>
        <p>{  !!data.reservation && data.reservation.hotelName }</p>
      </div>
      <div className={ styles.row }>
        <h4>{'Guest name'}</h4>
        <p>{  !!data.reservation && data.reservation.guestName }</p>
      </div>
      <div className={ styles.row }>
        <h4>{'Dates'}</h4>
        <p>{ !!data.reservation && format(new Date(data.reservation.arrivalDate), 'LLL d Y') } - { !!data.reservation  && format(new Date(data.reservation.departureDate), 'LLL d Y') }</p>
      </div>
    </div>
  </div>
  </React.Fragment>
);

export default Reservation;
