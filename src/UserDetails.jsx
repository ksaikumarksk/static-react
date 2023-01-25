export const UserDetails = (props) => {
  const { details } = props;
  const { id, subject, body, view_count } = details;

  return (
    <li>
      <p>id:{id}</p>
      <p>subject:{subject}</p>
      <p>body:{body}</p>
      <p>view_count:{view_count}</p>
    </li>
  );
};
