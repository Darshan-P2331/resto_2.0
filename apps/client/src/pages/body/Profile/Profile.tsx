import { useState } from "react";

type Props = {};

export default function Profile({}: Props) {
  const [user] = useState({
    name: "Rahul Sharma",
    email: "rahul@email.com",
    phone: "9876543210",
    address: "123 MG Road, Bangalore",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  return (
    <section>
      <div className="grid gap-6 p-6 mx-auto md:grid-cols-3">
        <div className="p-6 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800 dark:text-white">
          <img
            src={user.avatar}
            alt="profile"
            className="object-cover mx-auto border rounded-full w-28 h-28"
          />

          <h2 className="mt-4 text-[2rem] font-semibold">{user.name}</h2>

          <p className="text-xl text-gray-500">{user.email}</p>

          <button className="btn">
            Edit Profile
          </button>
        </div>

        {/* User Details */}
        <div className="p-6 bg-white shadow-lg md:col-span-2 rounded-xl dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-[2rem] font-semibold">Account Details</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-gray-500 text-md">Full Name</p>
              <p className="text-xl font-medium">{user.name}</p>
            </div>

            <div>
              <p className="text-gray-500 text-md">Email</p>
              <p className="text-xl font-medium">{user.email}</p>
            </div>

            <div>
              <p className="text-gray-500 text-md">Phone</p>
              <p className="text-xl font-medium">{user.phone}</p>
            </div>

            <div>
              <p className="text-gray-500 text-md">Address</p>
              <p className="text-xl font-medium">{user.address}</p>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="p-6 bg-white shadow-lg md:col-span-3 rounded-xl dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-[2rem] font-semibold">Recent Orders</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b">
              <div>
                <p className="text-xl font-medium">Order #1023</p>
                <p className="text-gray-500 text-md">12 Mar 2026</p>
              </div>

              <span className="text-2xl font-medium text-green-600">Delivered</span>

              <button className="text-blue-500 hover:underline">View</button>
            </div>

            <div className="flex items-center justify-between pb-3 border-b">
              <div>
                <p className="text-xl font-medium">Order #1018</p>
                <p className="text-gray-500 text-md">05 Mar 2026</p>
              </div>

              <span className="text-2xl font-medium text-yellow-600">Processing</span>

              <button className="text-blue-500 hover:underline">View</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
