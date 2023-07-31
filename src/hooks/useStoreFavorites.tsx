import { useState, useEffect } from "react";

type UseFavoritesReturn = {
  add: (id: string) => void;
  remove: (id: string) => void;
  items: string[]
};

export const useFavorites = (): UseFavoritesReturn => {
  const FAVORITES = "favorites.key";

  const [favoritesList, setFavoritesList] = useState<string[]>([])

  const list = () => {
    if (!localStorage) return [];

    const raw = localStorage.getItem(FAVORITES);

    if (!raw) return [];

    const parsed = JSON.parse(raw);
    setFavoritesList(parsed)
  };

  const save = (items: string[]) => {
    localStorage.setItem(FAVORITES, JSON.stringify(items));
    setFavoritesList(items)
  };

  const add = (id: string) => {
    if (!localStorage) return;

    const items = [...favoritesList]
    items.push(id);
    save(items);
  };

  const remove = (id: string) => {
    if (!localStorage) return;

    const items = [...favoritesList]
    const index = items.indexOf(id);

    if (index === -1) return;

    items.splice(index, 1);
    save(items);
  };


  useEffect(() => {
    list()
  }, [])
  return { items: favoritesList, add, remove };
};
