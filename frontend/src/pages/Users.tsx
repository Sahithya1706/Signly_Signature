import { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      <div className="bg-white p-6 rounded-2xl shadow-md max-w-md">
        <h3 className="text-lg font-semibold">{user?.name}</h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
};

export default Users;