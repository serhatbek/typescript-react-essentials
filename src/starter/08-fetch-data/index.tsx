import { useQuery } from '@tanstack/react-query';
import { fetchTours, type Tour } from '../../types';

const Component = () => {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours, //NOTE - queryFn always needs to return a promise
  });

  if (isPending) {
    return <h3>Pending...</h3>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div>
      <h2>Tours</h2>
      <div>
        {tours?.map((tour: Tour) => {
          return (
            <article key={tour.id} className='mb-1'>
              {/* <img src={tour.image} alt={tour.name} /> */}
              <h4>{tour.name}</h4>
              <p>{tour.info}</p>
              <p>{tour.price}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Component;

// import { useEffect, useState } from 'react';
// import { type Tour, tourSchema } from '../../types';
// const url = 'https://www.course-api.com/react-tours-project';

// const Component = () => {
//   const [tours, setTours] = useState<Tour[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState<string | null>(null);

//   console.log('tours', tours);

//   useEffect(() => {
//     const fetchData = async (): Promise<void> => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch tours...`);
//         }
//         const rawData: Tour[] = await response.json();
//         const result = tourSchema.array().safeParse(rawData);
//         if (!result.success) {
//           console.log(result.error.message);
//           throw new Error(`Failed to parse tours...`);
//         }
//         setTours(result.data);
//       } catch (error) {
//         const errMessage =
//           error instanceof Error ? error.message : 'there was an error...';
//         setIsError(errMessage);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <h3>Loading...</h3>;
//   }

//   if (isError) {
//     return <h3>Error: {isError}</h3>;
//   }

//   return (
//     <div>
//       <h2 className='mb-1'>Tours</h2>
//       {tours?.map((tour: Tour) => {
//         return (
//           <article key={tour.id}>
//             <img src={tour.img} alt={tour.name} />
//             <h4>{tour.name}</h4>
//             <p>{tour.info}</p>
//             <p>{tour.price}</p>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default Component;
