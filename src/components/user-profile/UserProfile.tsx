import { User } from "@supabase/supabase-js";

interface UserProfileProps {
  uuid: string;
  user: User;
}

export default function UserProfile({ user, uuid }: UserProfileProps) {
  const editable = uuid === user.id;

  return (
    <div>
      <h1>User Profile {uuid}</h1>
    </div>
  );
}
