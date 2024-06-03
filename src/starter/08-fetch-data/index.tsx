import { useQuery } from '@tanstack/react-query';
import { fetchTours } from './types';

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>loading...</h2>;
  if (isError) return <h2>error: {error.message}</h2>;

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
      {tours.map((tour) => {
        return <h2 key={tour.id}>hello {tour.name}</h2>;
      })}
    </div>
  );
}
export default Component;
