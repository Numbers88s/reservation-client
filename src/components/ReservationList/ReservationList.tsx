// modules
import * as React from 'react';
import { format } from 'date-fns';
import { Switch, Route, Link } from 'react-router-dom';

// local
import Reservation from '../Reservation';
import AddNewButton from '../AddNewButton'
import { ReservationListQuery } from '../../generated/graphql';
import styles  from  './ReservationList.module.scss';

interface Props {
  data: ReservationListQuery;
}

const ReservationList: React.FC<Props> = ({ data }) => (
  <div className={ styles.container }>
    <div className={ styles.titleContainer }>
      <h3>{ 'Reservations' }</h3>
      <AddNewButton />
    </div>
    <ul className={ styles.list }>
      {
        !!data.allReservations &&
        data.allReservations.map(
          (reservation, i) =>
            !!reservation && (
              <li key={ i } className={ styles.item }>
                <div>
                  <div className={ styles.row }>
                    <h4>{'Hotel'}</h4>
                    <p>{ reservation.hotelName }</p>
                  </div>
                  <div className={ styles.row }>
                    <h4>{'Dates'}</h4>
                    <p>{ format(new Date(reservation.arrivalDate), 'LLL d Y') } - { format(new Date(reservation.departureDate), 'LLL d Y') }</p>
                  </div>
                  <div className={ styles.link }>
                    <Link to={ `/${ reservation._id }` }>{'See details >'}</Link>
                  </div>
                </div>
              </li>
            ),
        )
      }
    </ul>
    <Switch>
      <Route exact path="/:id" component={ Reservation } />
    </Switch>
  </div>
);

export default ReservationList;
