"use client";

import { fetchGitHubUser } from "lib/data";
import { GitHubUser } from "lib/definitions";
import { CircleX, Ellipsis } from "lucide-react";
import { useState } from "react";
import Card from "ui/card";
import Header from "ui/header";
import SearchInput from "ui/search-input";

export default function Page() {
  const [user, setUser] = useState<GitHubUser>(null);
  const [loading, setLoading] = useState<boolean>(null);
  const [error, setError] = useState<string>("");

  async function getGitHubUser(username: string) {
    setLoading(true);
    setError("");
    if (username) {
      try {
        const response = await fetchGitHubUser(username);
        setUser(response.data);
      } catch (error) {
        setUser(null);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setUser(null);
      setLoading(false);
      setError("Please, enter the username.");
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <main className="flex flex-col gap-4">
        <SearchInput onSearch={getGitHubUser} />
        {loading && <Ellipsis />}
        {error && (
          <div className="flex items-center gap-2 text-sm text-red-600">
            <CircleX />
            <p>{error}</p>
          </div>
        )}
        {user && <Card user={user} />}
      </main>
    </div>
  );
}
