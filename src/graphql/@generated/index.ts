import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};


export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  text: Scalars['String'];
  time: Scalars['DateTime'];
  user: User;
};

export type MessageAvgAggregate = {
  __typename?: 'MessageAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  id: Scalars['Int'];
  text: Scalars['Int'];
  time: Scalars['Int'];
  _all: Scalars['Int'];
};

export type MessageCreateInput = {
  text: Scalars['String'];
  user: UserCreateNestedOneWithoutMessagesInput;
};

export type MessageListRelationFilter = {
  every?: Maybe<MessageWhereInput>;
  some?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
};

export type MessageSumAggregate = {
  __typename?: 'MessageSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type MessageUpdateWithWhereUniqueWithoutUserInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutUserInput;
};

export type MessageUpdateWithoutUserInput = {
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MessageWhereInput = {
  AND?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  id?: Maybe<IntFilter>;
  text?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage?: Maybe<Message>;
  updateMessage: Message;
};


export type MutationAddMessageArgs = {
  data: MessageCreateInput;
};


export type MutationUpdateMessageArgs = {
  query: MessageUpdateWithWhereUniqueWithoutUserInput;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Query = {
  __typename?: 'Query';
  messages: Array<Message>;
};


export type QueryMessagesArgs = {
  where?: Maybe<MessageWhereInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded: Message;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Message>>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  create?: Maybe<UserCreateWithoutMessagesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMessagesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutMessagesInput;
};

export type UserCreateWithoutMessagesInput = {
  username: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  username?: Maybe<StringFilter>;
  firstName?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
  messages?: Maybe<MessageListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type ChatMessageFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'text' | 'time'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'username'>
  ) }
);

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & ChatMessageFragment
  )> }
);

export type NewMessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMessagesSubscription = (
  { __typename?: 'Subscription' }
  & { messageAdded: (
    { __typename?: 'Message' }
    & ChatMessageFragment
  ) }
);

export type SendNewMessageMutationVariables = Exact<{
  text: Scalars['String'];
  username: Scalars['String'];
}>;


export type SendNewMessageMutation = (
  { __typename?: 'Mutation' }
  & { addMessage?: Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'text'>
  )> }
);

export const ChatMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Message"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<ChatMessageFragment, unknown>;
export const GetMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatMessage"}}]}}]}},...ChatMessageFragmentDoc.definitions]} as unknown as DocumentNode<GetMessagesQuery, GetMessagesQueryVariables>;
export const NewMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatMessage"}}]}}]}},...ChatMessageFragmentDoc.definitions]} as unknown as DocumentNode<NewMessagesSubscription, NewMessagesSubscriptionVariables>;
export const SendNewMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendNewMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connectOrCreate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"create"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<SendNewMessageMutation, SendNewMessageMutationVariables>;