// import { type PropsWithChildren } from 'react';

// interface ComponentProps extends PropsWithChildren {
//   name: string;
//   age: number;
// }

interface ComponentProps {
  name: string;
  age: number;
  children?: React.ReactNode;
}

// type ComponentProps = PropsWithChildren<{
//   name: string;
//   age: number;
// }>;

// type ComponentProps = {
//   name: string;
//   age: number;
//   children?: React.ReactNode;
// }

const Component = ({ name, age, children }: ComponentProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      {children}
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
