export const Friendens = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" />
      <p> {name} </p>
    </div>
  );
};
