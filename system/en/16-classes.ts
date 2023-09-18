type TUser = { id: number };
interface IUser {
  id: number;
}

class User1 implements TUser {}

class User2 implements IUser {}
