import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_METADATA } from '../queries';

// Loads the CMS page metadata (title, description, share image) for a page.
export default function useMetaDatas(page) {
  const { result } = useQuery(GET_METADATA, { where: { page } });
  return computed(() => result.value?.metaDatas);
}
