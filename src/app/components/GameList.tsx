'use client';

import { useState } from 'react';
import { games } from '@/data/gamesdata';
import GameCard from '@/app/components/GameCard';

const GameList = () => {
  const [category, setCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('name');

  const categories = ['all', ...new Set(games.map((game) => game.category))];

  const filteredGames = games
    .filter((game) => (category === 'all' ? true : game.category === category))
    .filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'date') return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      if (sort === 'popularity') return b.popularity - a.popularity;
      return 0;
    });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="font-semibold">
            Categoria:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-md border border-gray-300 p-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'Todas' : cat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="search" className="font-semibold">
            Pesquisar:
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md border border-gray-300 p-2"
            placeholder="Nome do jogo"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-semibold">
            Ordenar por:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-gray-300 p-2"
          >
            <option value="name">Nome</option>
            <option value="date">Data de Adição</option>
            <option value="popularity">Popularidade</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;