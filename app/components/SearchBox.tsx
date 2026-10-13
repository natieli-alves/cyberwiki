"use client";

import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <form
      className="search-box"
      onSubmit={(e) => {
        e.preventDefault();

        const busca = e.currentTarget.elements.namedItem(
          "busca"
        ) as HTMLInputElement;

        const slug = busca.value
          .toLowerCase()
          .trim()
          .replaceAll(" ", "-");

        if (slug) {
          window.location.href = `/conceitos/${slug}`;
        }
      }}
    >
      <input
        type="text"
        name="busca"
        placeholder="Pesquisar um conceito..."
      />

      <button type="submit" aria-label="Pesquisar">
        <Search size={20} strokeWidth={2} />
      </button>
    </form>
  );
}