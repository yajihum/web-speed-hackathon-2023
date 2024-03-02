import { useSuspenseQuery_experimental as useSuspenseQuery } from '@apollo/client';

import type { GetRecommendationsQueryResponse } from '../graphql/queries';
import { GetRecommendationsQuery } from '../graphql/queries';

export const useRecommendation = () => {
  const recommendationsResult =
    useSuspenseQuery<GetRecommendationsQueryResponse>(GetRecommendationsQuery);

  const recommendations = recommendationsResult.data?.recommendations;
  if (recommendations == null) {
    return { recommendation: undefined };
  }

  console.log(recommendations[0]);
  return { recommendation: recommendations[0] };
};
