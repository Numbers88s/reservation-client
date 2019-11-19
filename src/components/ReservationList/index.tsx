// modules
import * as React from 'react';
import { useReservationListQuery } from '../../generated/graphql';
import ReservationList from './ReservationList';

// local
import styles from './ReservationList.module.scss';


const ReservationListContainer = (): JSX.Element => {
  const { data, error, loading } = useReservationListQuery();

  if (loading) return <div className={ styles.loading }>{ 'Loading...' }</div>;
  if (error || !data) return <div>{ 'ERROR' }</div>;

  return <ReservationList data={ data } />;
};

export default ReservationListContainer;
