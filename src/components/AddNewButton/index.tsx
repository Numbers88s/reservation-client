// modules
import * as React from 'react';
import cx from 'classnames';
import Modal from '@bdenzer/react-modal';

// local
import { useAddReservationMutation } from '../../generated/graphql';
import { QUERY_RESERVATION_LIST } from '../ReservationList/query';
import Input from '../Input';
import DatePicker from '../DatePicker';
import styles from './AddNewButton.module.scss';

export interface AddNewButtonData {
  isOpen:  boolean;
  guestName: string;
  hotelName: string;
  arrivalDate: string;
}

const AddNewButton: React.FC = () => {

  const [isOpen, setIsOpen] = React.useState<AddNewButtonData['isOpen']>(false);
  const [guestName, setGuestame] = React.useState('');
  const [hotelName, setHotelName] = React.useState('');
  const [arrivalDate, setArrivalDate] = React.useState('');
  const [departureDate, setDepartureDate] = React.useState('');

  const isValid: boolean = (guestName === '' || hotelName === '' || arrivalDate === '' || departureDate === '');

  const [addNewReservation] = useAddReservationMutation({
    onCompleted: () => setIsOpen(false),
    refetchQueries: [{ query: QUERY_RESERVATION_LIST }],
  });

  return (
    <React.Fragment>
      <button
        onClick={ (): void => setIsOpen(true) }
        className={ styles.button }
      >
        { 'Add Reservation +' }
      </button>
      <Modal
        customStyle={ {
          animationTime: 400,
          modalTitle: {
            fontFamily: 'Raleway',
            fontSize: '24px',
            paddingLeft: '10px',
          },
          hoveredButtonText: {
            fontWeight: 'bold',
          },
          modalHeader: {
            height: '60px',
          },
          modalBody: {
            padding: '30px',
          },
        } }
        closeModal={ (): void => setIsOpen(false) }
        shouldShowModal={ isOpen }
        title={ 'Add Reservation' }
      >
        <div>
          <Input
            label={ 'Hotel Name' }
            name={ 'hotel' }
            placeholder={ 'Add Hotel Name' }
            value={ hotelName }
            onHandleChange={ setHotelName }
          />

          <Input
            label={ 'Guest Name' }
            name={ 'guest' }
            placeholder={ 'Add Guest Name' }
            value={ guestName }
            onHandleChange={ setGuestame }
          />
          <DatePicker
            onSetArrivalDate={ setArrivalDate }
            onSetDepartureDate={ setDepartureDate }
          />
        </div>
        <button
          onClick={ () =>
            addNewReservation({ variables: { guestName, hotelName, arrivalDate, departureDate } })
          }
          className={ cx(styles.button, { [`${ styles.disabled }`]: isValid }) }
          disabled={ isValid }
        >
          { 'Save' }
        </button>
      </Modal>
    </React.Fragment>
  );
};

export default AddNewButton;
