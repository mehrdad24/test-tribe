import type { CustomField, Maybe, PaginatedPost, Post } from '@tribeplatform/gql-client/types';
import type { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query/types/core';

export type TabContentsProps = {
  latestPosts: Post[];
  isLoading: boolean;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<PaginatedPost, unknown>>;
  isFetchingNextPage: boolean;
  tagline?: Maybe<string>;
  email?: Maybe<string>;
  hasNextPage?: boolean;
  createdAt?: Maybe<string>;
  fields?: Maybe<CustomField[]>;
};
