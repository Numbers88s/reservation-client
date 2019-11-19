import gql from 'graphql-tag';

export const QUERY_RESERVATION = gql`
  query Reservation($id: ID!) {
    reservation(id: $id) {
      guestName,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`;