import type { Maybe, Media } from '@tribeplatform/gql-client/types';

export type StageHomeProps = {
  name?: Maybe<string>;
  role?: Maybe<string>;
  profilePicture?: Maybe<Media>;
  banner?: Maybe<Media>;
  status: 'idle' | 'error' | 'loading' | 'success';
};
