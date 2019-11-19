// modules
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// local
import { useReservationQuery } from '../../generated/graphql';
import Reservation from './Reservation';
import styles from './Reservation.module.scss';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
  id: string;
}

const ReservationContainer = ({ match: { params: { id } } }: MatchProps): JSX.Element => {
  const { data, error, loading } = useReservationQuery({ variables: { id } });
  if (loading) return <div className={ styles.loading }>{ 'Loading...' }</div>;
  if (error || !data) return <div>ERROR</div>;

  return <Reservation data={ data } />;
};

export default withRouter(ReservationContainer);
