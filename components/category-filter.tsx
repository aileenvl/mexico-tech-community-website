"use client";

import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  const [showAll, setShowAll] = useState(false);
  const maxVisible = 10;
  const hasMore = categories.length > maxVisible;

  // Reorder categories to show selected one as second item (after "All")
  const reorderedCategories = (() => {
    if (selected === "All" || !selected) {
      return categories;
    }

    const filtered = categories.filter((cat) => cat !== selected);
    const firstCategory = filtered[0]; // This should be "All"
    const rest = filtered.slice(1);

    return [firstCategory, selected, ...rest];
  })();

  const visibleCategories = showAll
    ? reorderedCategories
    : reorderedCategories.slice(0, maxVisible);

  const handleCategoryClick = (category: string) => {
    onChange(category);
    setShowAll(false); // Collapse to show only 10 when a category is selected
  };

  return (
    <div className="flex flex-wrap gap-2">
      {visibleCategories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            selected === category
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border text-foreground hover:border-primary/50"
          }`}
        >
          {category}
        </button>
      ))}
      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 rounded-full font-medium transition-all bg-card border border-border text-foreground hover:border-primary/50"
        >
          {showAll
            ? "See less"
            : `See more (${categories.length - maxVisible})`}
        </button>
      )}
    </div>
  );
}
