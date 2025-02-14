import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <div className="flex flex-col items-center mt-10 p-4 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
          <img
            src={user?.picture}
            alt={user?.name}
            className="w-24 h-24 rounded-full shadow-md"
          />
          <h2 className="text-xl font-semibold mt-3">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
          {user?.email_verified && (
            <p className="text-green-600 text-sm mt-1">✔ Email Verified</p>
          )}
        </div>
      ) : (
        <p className="text-center mt-10">Please log in to view your profile.</p>
      )}
    </>
  );
}

export default Profile;
