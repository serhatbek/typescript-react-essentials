const Component = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default Component;
