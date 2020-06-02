export interface UserProps {
  section: string;
  user: {
    first_name: string;
    last_name: string;
  };
}

export interface UsersProps {
  section: string;
  users: {
    user: {
      first_name: string;
      last_name: string;
    };
  }[];
}
