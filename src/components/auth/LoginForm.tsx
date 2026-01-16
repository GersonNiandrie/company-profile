"use client";

import { useState } from "react";
import Backendless from "@/lib/backendless";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";

export default function LoginForm() {
  const { setUser } = useUser();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const loggedInUser = await Backendless.UserService.login(email, password, true);
      setUser(loggedInUser);
      router.push("/"); // redirect after login
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <form className="max-w-md mx-auto mt-24 p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        className="input input-bordered w-full mb-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input input-bordered w-full mb-3"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="btn btn-primary w-full" type="submit">Login</button>
    </form>
  );
}
