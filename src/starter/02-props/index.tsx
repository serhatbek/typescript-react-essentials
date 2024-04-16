interface ComponentProps {
  name: string;
  age: number;
}

const Component = ({ name, age }: ComponentProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default Component;

// const Component = (props: ComponentProps) => {  //NOTE - We can also directly reference props with types
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.age}</h2>
//     </div>
//   );
// };

// export default Component;
