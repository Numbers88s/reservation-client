import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  addReservation?: Maybe<Reservation>;
};


export type MutationAddReservationArgs = {
  guestName: Scalars['String'];
  hotelName: Scalars['String'];
  arrivalDate: Scalars['String'];
  departureDate: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  reservation?: Maybe<Reservation>;
  allReservations?: Maybe<Array<Maybe<Reservation>>>;
};


export type QueryReservationArgs = {
  id: Scalars['ID'];
};

export type Reservation = {
  __typename?: 'Reservation';
  _id: Scalars['ID'];
  guestName: Scalars['String'];
  hotelName: Scalars['String'];
  arrivalDate: Scalars['Date'];
  departureDate: Scalars['Date'];
};

export type AddReservationMutationVariables = {
  guestName: Scalars['String'];
  hotelName: Scalars['String'];
  arrivalDate: Scalars['String'];
  departureDate: Scalars['String'];
};


export type AddReservationMutation = (
  { __typename?: 'Mutation' }
  & { addReservation: Maybe<(
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'guestName' | 'hotelName' | 'arrivalDate' | 'departureDate'>
  )>; }
);

export type ReservationQueryVariables = {
  id: Scalars['ID'];
};


export type ReservationQuery = (
  { __typename?: 'Query' }
  & { reservation: Maybe<(
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'guestName' | 'hotelName' | 'arrivalDate' | 'departureDate'>
  )>; }
);

export type ReservationListQueryVariables = {};


export type ReservationListQuery = (
  { __typename?: 'Query' }
  & { allReservations: Maybe<Array<Maybe<(
    { __typename?: 'Reservation' }
    & Pick<Reservation, '_id' | 'guestName' | 'hotelName' | 'arrivalDate' | 'departureDate'>
  )>>>; }
);


export const AddReservationDocument = gql`
    mutation addReservation($guestName: String!, $hotelName: String!, $arrivalDate: String!, $departureDate: String!) {
  addReservation(guestName: $guestName, hotelName: $hotelName, arrivalDate: $arrivalDate, departureDate: $departureDate) {
    guestName
    hotelName
    arrivalDate
    departureDate
  }
}
    `;
export type AddReservationMutationFn = ApolloReactCommon.MutationFunction<AddReservationMutation, AddReservationMutationVariables>;
export type AddReservationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddReservationMutation, AddReservationMutationVariables>, 'mutation'>;

export const AddReservationComponent = (props: AddReservationComponentProps) => (
  <ApolloReactComponents.Mutation<AddReservationMutation, AddReservationMutationVariables> mutation={ AddReservationDocument } { ...props } />
);

export type AddReservationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddReservationMutation, AddReservationMutationVariables> & TChildProps;
export function withAddReservation<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
AddReservationMutation,
AddReservationMutationVariables,
AddReservationProps<TChildProps>>) {
  return ApolloReactHoc.withMutation<TProps, AddReservationMutation, AddReservationMutationVariables, AddReservationProps<TChildProps>>(AddReservationDocument, {
    alias: 'addReservation',
    ...operationOptions,
  });
}

/**
 * __useAddReservationMutation__
 *
 * To run a mutation, you first call `useAddReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReservationMutation, { data, loading, error }] = useAddReservationMutation({
 *   variables: {
 *      guestName: // value for 'guestName'
 *      hotelName: // value for 'hotelName'
 *      arrivalDate: // value for 'arrivalDate'
 *      departureDate: // value for 'departureDate'
 *   },
 * });
 */
export function useAddReservationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddReservationMutation, AddReservationMutationVariables>) {
  return ApolloReactHooks.useMutation<AddReservationMutation, AddReservationMutationVariables>(AddReservationDocument, baseOptions);
}
export type AddReservationMutationHookResult = ReturnType<typeof useAddReservationMutation>;
export type AddReservationMutationResult = ApolloReactCommon.MutationResult<AddReservationMutation>;
export type AddReservationMutationOptions = ApolloReactCommon.BaseMutationOptions<AddReservationMutation, AddReservationMutationVariables>;
export const ReservationDocument = gql`
    query Reservation($id: ID!) {
  reservation(id: $id) {
    guestName
    hotelName
    arrivalDate
    departureDate
  }
}
    `;
export type ReservationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ReservationQuery, ReservationQueryVariables>, 'query'> & ({ variables: ReservationQueryVariables; skip?: boolean } | { skip: boolean });

export const ReservationComponent = (props: ReservationComponentProps) => (
  <ApolloReactComponents.Query<ReservationQuery, ReservationQueryVariables> query={ ReservationDocument } { ...props } />
);

export type ReservationProps<TChildProps = {}> = ApolloReactHoc.DataProps<ReservationQuery, ReservationQueryVariables> & TChildProps;
export function withReservation<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
ReservationQuery,
ReservationQueryVariables,
ReservationProps<TChildProps>>) {
  return ApolloReactHoc.withQuery<TProps, ReservationQuery, ReservationQueryVariables, ReservationProps<TChildProps>>(ReservationDocument, {
    alias: 'reservation',
    ...operationOptions,
  });
}

/**
 * __useReservationQuery__
 *
 * To run a query within a React component, call `useReservationQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReservationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
  return ApolloReactHooks.useQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, baseOptions);
}
export function useReservationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, baseOptions);
}
export type ReservationQueryHookResult = ReturnType<typeof useReservationQuery>;
export type ReservationLazyQueryHookResult = ReturnType<typeof useReservationLazyQuery>;
export type ReservationQueryResult = ApolloReactCommon.QueryResult<ReservationQuery, ReservationQueryVariables>;
export const ReservationListDocument = gql`
    query ReservationList {
  allReservations {
    _id
    guestName
    hotelName
    arrivalDate
    departureDate
  }
}
    `;
export type ReservationListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ReservationListQuery, ReservationListQueryVariables>, 'query'>;

export const ReservationListComponent = (props: ReservationListComponentProps) => (
  <ApolloReactComponents.Query<ReservationListQuery, ReservationListQueryVariables> query={ ReservationListDocument } { ...props } />
);

export type ReservationListProps<TChildProps = {}> = ApolloReactHoc.DataProps<ReservationListQuery, ReservationListQueryVariables> & TChildProps;
export function withReservationList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
TProps,
ReservationListQuery,
ReservationListQueryVariables,
ReservationListProps<TChildProps>>) {
  return ApolloReactHoc.withQuery<TProps, ReservationListQuery, ReservationListQueryVariables, ReservationListProps<TChildProps>>(ReservationListDocument, {
    alias: 'reservationList',
    ...operationOptions,
  });
}

/**
 * __useReservationListQuery__
 *
 * To run a query within a React component, call `useReservationListQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationListQuery({
 *   variables: {
 *   },
 * });
 */
export function useReservationListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReservationListQuery, ReservationListQueryVariables>) {
  return ApolloReactHooks.useQuery<ReservationListQuery, ReservationListQueryVariables>(ReservationListDocument, baseOptions);
}
export function useReservationListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReservationListQuery, ReservationListQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<ReservationListQuery, ReservationListQueryVariables>(ReservationListDocument, baseOptions);
}
export type ReservationListQueryHookResult = ReturnType<typeof useReservationListQuery>;
export type ReservationListLazyQueryHookResult = ReturnType<typeof useReservationListLazyQuery>;
export type ReservationListQueryResult = ApolloReactCommon.QueryResult<ReservationListQuery, ReservationListQueryVariables>;
