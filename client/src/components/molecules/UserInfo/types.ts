import type { Maybe, Media } from '@tribeplatform/gql-client/types';

export type UserInfoProps = {
  name?: Maybe<string>;
  role?: Maybe<string>;
  profilePicture?: Maybe<Media>;
  status: 'idle' | 'error' | 'loading' | 'success';
};
