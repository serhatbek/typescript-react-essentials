import { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

type dataProps = {
  id: string;
  img: string;
  info: string;
  name: string;
  price: string;
};

const Component = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [tours, setTours] = useState<dataProps[] | []>([]);

  console.log('tours', tours);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }
        const data = await response.json();
        setTours(data);
      } catch (error) {
        const errMessage =
          error instanceof Error ? error.message : 'there was an error...';
        setIsError(errMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  return (
    <div>
      <h2 className='mb-1'>Tours</h2>
      {tours?.map((tour: dataProps) => {
        return (
          <article key={tour.id}>
            <img src={tour.img} alt={tour.name} />
            <h4>{tour.name}</h4>
            <p>{tour.info}</p>
            <p>{tour.price}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Component;
