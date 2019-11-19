import gql from 'graphql-tag';

export const QUERY_RESERVATION_LIST = gql`
  query ReservationList {
    allReservations {
        _id,
        guestName,
        hotelName,
        arrivalDate,
        departureDate
    }
  }
`;