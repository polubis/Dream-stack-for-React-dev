type UserType = 'admin' | 'moderator' | 'normal';

type TUser = {
  [U in UserType]: boolean;
};

// ✅ Here it works!
const user_with_type: TUser = {
  admin: true,
  moderator: false,
  normal: false,
};

// ❌ Doesn't work.
interface IUser {
  [key: UserType]: boolean;
}

// ❌ Doesn't work.
interface IUser {
  [key in UserType]: boolean;
}
