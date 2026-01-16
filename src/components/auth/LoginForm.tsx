"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Backendless from "@/lib/backendless";
import { useUser } from "@/lib/UserContext";

export default function LoginForm() {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const loggedIn = await Backendless.UserService.login(email, password, true);
      setUser(loggedIn); // navbar updates instantly
      router.push("/"); // redirect
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full mb-3"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-bordered w-full mb-3"
        required
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button type="submit" className="btn btn-primary w-full" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
