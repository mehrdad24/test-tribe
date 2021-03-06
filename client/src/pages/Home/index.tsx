import StageHome from '../../components/organisms/StageHome';
import TabsContents from '../../components/organisms/TabsContents';
import Layout from '../../components/templates/layout';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import type { Post } from '@tribeplatform/gql-client/types';
import { useAuthMember, usePosts } from '@tribeplatform/react-sdk/hooks';

const Home = () => {
  const { data: user, status } = useAuthMember();

  const {
    data: posts,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts({
    fields: {
      owner: { member: 'all' },
      reactions: { variables: { limit: 5 }, fields: 'basic' },
    },
    variables: { limit: 4 },
  });

  const { nodes: latestPosts } = simplifyPaginatedResult<Post>(posts);

  return (
    <Layout>
      <StageHome banner={user?.banner} name={user?.name} profilePicture={user?.profilePicture} role={user?.role?.name} status={status} />

      <TabsContents
        latestPosts={latestPosts}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        tagline={user?.tagline}
        email={user?.email}
        createdAt={user?.createdAt}
        fields={user?.fields}
      />
    </Layout>
  );
};

export default Home;
