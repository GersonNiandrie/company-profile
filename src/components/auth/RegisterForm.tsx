"use client";

import { useState } from "react";
import Backendless from "@/lib/backendless";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";

export default function RegisterForm() {
  const { setUser } = useUser();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await Backendless.UserService.register({
        email,
        password,
        name,
      });
      // Auto-login after registration
      const loggedInUser = await Backendless.UserService.login(email, password, true);
      setUser(loggedInUser);
      router.push("/"); // redirect after register
    } catch (err: any) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <form className="max-w-md mx-auto mt-24 p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        className="input input-bordered w-full mb-3"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button className="btn btn-primary w-full" type="submit">Register</button>
    </form>
  );
}
