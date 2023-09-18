interface User {
  id: number;
  name: string;
}

interface Id extends Pick<User, 'id'> {}

type Id = Pick<User, 'id'>;
