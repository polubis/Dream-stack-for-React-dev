// When just a flag is needed.
const form = useToggle();
// When flag and data is needed,
const form = useToggle<User>();
// When we want to start with data and flag.
const form = useToggle<User>({ opened: true, data: { id: 1 } });
// When you love destructuring assignment.
const { opened, closed, data, ...others } = useToggle();

// Means something is closed.
form.closed;
// Means something is opened.
form.opened;
// Stores the data.
form.data;

// Makes opened falsy and sets data to "null".
form.close();
// Makes opened truthy.
form.open();
// Toggles opened flag.
form.toggle();
// Makes opened truthy and assigns the data.
form.openWithData({ id: 1 });
// Toggles opened flag and assigns the data.
form.toggleWithData({ id: 1 });

// Overrides the state.
form.set({ opened: true, data: { id: 1 } });