const UserDetails = () => {
  const form = useToggle<User>();

  return (
    <>
      <button onClick={() => form.openWithData({ id: 1 })}>
        Edit user
      </button>
      {showForm && <UserForm onClose={form.close} />}
    </>
  );
};