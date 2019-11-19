import gql from 'graphql-tag';

export const MUTATION_ADD_RESERVATION = gql`
  mutation addReservation(
      $guestName: String!
      $hotelName: String!
      $arrivalDate: String!
      $departureDate: String!
    ) {
        addReservation(
            guestName: $guestName,
            hotelName: $hotelName,
            arrivalDate: $arrivalDate,
            departureDate: $departureDate
        ) {
            guestName,
            hotelName,
            arrivalDate,
            departureDate
        }
    }
`;