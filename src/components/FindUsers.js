import { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { Link } from "react-router-dom";
import { getRandomUsers } from "../api/users";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const FindUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getRandomUsers({ size: 5 });
    setLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    fetchUsers();
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <AiOutlineUser className="text-2xl text-gray-600" />
          <h1 className="font-bold text-lg">Find Others</h1>
        </div>
        <button
          className={`px-2 py-1 rounded-md ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
          onClick={handleClick}
        >
          <MdRefresh className="text-lg text-gray-600" />
        </button>
      </div>

      <hr className="my-2" />

      {loading ? (
        <Loading />
      ) : (
        users &&
        users.map((user) => (
          <div
            className="flex justify-between items-center"
            key={user._id}
          >
            <div className="flex items-center space-x-2">
              <UserAvatar
                width={30}
                height={30}
                username={user.username}
              />
              <h2>{user.username}</h2>
            </div>
            <Link
              to={"/users/" + user.username}
              className="text-blue-500"
            >
              View
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default FindUsers;
