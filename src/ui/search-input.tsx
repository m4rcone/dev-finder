import { SearchIcon } from "lucide-react";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (username: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [query, setQuery] = useState<string>("");

  function handleSearch() {
    if (query.trim()) {
      onSearch(query);
    } else {
      onSearch("");
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-xl bg-white py-2 pr-2 pl-4 dark:bg-slate-800">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="GitHub username..."
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-8 text-sm placeholder:text-sm placeholder:text-zinc-800 dark:placeholder:text-zinc-200"
        />
        <SearchIcon className="absolute top-0 left-0 text-blue-700 dark:text-blue-600" />
      </div>
      <button
        onClick={() => handleSearch()}
        className="cursor-pointer rounded-xl bg-blue-700 px-4 py-3 text-sm text-zinc-200 dark:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}
