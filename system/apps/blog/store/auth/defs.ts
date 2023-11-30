import type { SignedInUserDto, Username } from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace AuthStore {
  export type User = SignedInUserDto;

  export type NullableUser = User | null;

  export interface Storage {
    user: NullableUser;
  }

  export interface Actions {
    check(): void;
    authorize(user: User): void;
    unauthorize(): void;
  }

  export interface State {
    is: 'idle' | 'authorized' | 'unauthorized';
    user: NullableUser;
  }

  export type Is = State['is'];

  export interface Selectors {
    useIsAuthor(username: Username): boolean;
    useIsAdmin(): boolean;
    useIsAuthorized(): boolean;
    useState(): State;
  }
}

export type { AuthStore };
