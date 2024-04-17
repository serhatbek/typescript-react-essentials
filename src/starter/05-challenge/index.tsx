// interface BasicCardProps {
//   type: 'basic';
//   name: string;
// }
// interface AdvancedCardProps {
//   type: 'advanced';
//   name: string;
//   email?: string;
// }
/* -------------------------------------------------------------------------- */

// interface BasicCardProps {
//   type: string;
//   name: string;
// }
// interface AdvancedCardProps extends BasicCardProps {
//   email: string;
// }
/* -------------------------------------------------------------------------- */
type BasicCardProps = {
  type: 'basic';
  name: string;
};
type AdvancedCardProps = {
  type: 'advanced';
  name: string;
  email: string;
};

type CardProps = BasicCardProps | AdvancedCardProps;

const Component = (props: CardProps) => {
  const { type, name } = props;
  return (
    <article
      className={
        type === 'basic' ? 'alert alert-success' : 'alert alert-danger'
      }
    >
      <h2>User: {name}</h2>
      {type === 'advanced' && <h2>Email: {props.email}</h2>}
    </article>
  );
};

export default Component;

// type CardProps = BasicCardProps | AdvancedCardProps;

// const Component = (props: CardProps) => {
//   const { type, name } = props;
//   return (
//     <article
//       className={
//         type === 'basic' ? 'alert alert-success' : 'alert alert-danger'
//       }
//     >
//       <h2>User: {name}</h2>
//       {type === 'advanced' && <h2>Email: {props.email}</h2>}
//     </article>
//   );
// };

// export default Component;
