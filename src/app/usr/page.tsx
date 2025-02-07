"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";
import { getToken } from "@/lib/jwt";
import { User } from "../components/interfaces/PostInterface";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("user-details");
    if (!token) {
      router.push("/login");
    } else {
      setAuthenticated(true);
      fetchUsers();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const token = getToken();
      if (!token) throw new Error("User not authenticated");

      const response = await fetch("/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterOrUpdate = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = getToken();
      if (!token) throw new Error("User not authenticated");

      const requestOptions = {
        method: formData.id ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const url = formData.id
        ? `/api/auth/user/${formData.id}`
        : "/api/auth/user";
      const response = await fetch(url, requestOptions);

      if (!response.ok) throw new Error("Failed to process user");

      setFormData({ id: null, name: "", email: "", password: "" }); // Reset form
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Operation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number | undefined) => {
    try {
      const token = getToken();
      if (!token) throw new Error("User not authenticated");

      await fetch(`/api/auth/user/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user: any) => {
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      password: "",
    });
  };

  if (!authenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <form onSubmit={handleRegisterOrUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (Leave blank to keep the same)"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
            disabled={loading}
          >
            {loading ? "Processing..." : formData.id ? "Update" : "Register"}
          </button>
        </form>

        <h2 className="text-xl font-bold mt-6">Users List</h2>
        <ul className="mt-2">
          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            users.map((user) => (
              <li
                key={user.id}
                className="p-3 border rounded mt-2 flex justify-between items-center bg-gray-100"
              >
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </Layout>
  );
}
