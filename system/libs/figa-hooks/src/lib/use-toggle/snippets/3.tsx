const UserDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const openForm = (data: User) => {
    setShowForm(true);
    setUser(user);
  };

  const closeForm = () => {
    setShowForm(false);
    setUser(null);
  };

  return (
    <>
      <button onClick={() => openForm({ id: 1, username: 'Juan' })}>
        Edit user
      </button>
      {showForm && <UserForm onClose={closeForm} />}
    </>
  );
};