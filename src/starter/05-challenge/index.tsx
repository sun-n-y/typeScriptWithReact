type BasicProfileCardProps = {
  type: 'basic';
  name: string;
};

type AdvancedProfileCardProps = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  const { name, type } = props;

  if (type === 'basic') {
    return (
      <article className="alert alert-success">
        <h2>user: {name}</h2>
      </article>
    );
  }

  if (type === 'advanced') {
    return (
      <article className="alert alert-danger">
        <h2>user: {name}</h2>
        <h2>{props.email}</h2>
      </article>
    );
  }
}

export default Component;
