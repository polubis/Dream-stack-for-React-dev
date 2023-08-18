const AnyApplicationComponent = () => {
  const [showUsers, setShowUsers] = useState(false);

  const handleShowButtonClick = () => {
    setShowUsers(true);
  };

  const handleCloseButtonClick = () => {
    setShowUsers(false);
  };

  return <>{showUsers && <UsersList />}</>;
};