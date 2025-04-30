'use client';

import Image from 'next/image';
import { Game } from '@/types/TypeGame';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="rounded-md border border-gray-300 bg-gray-50 p-4 shadow-sm">
      <Image
        src={`https://via.placeholder.com/150?text=${game.name}`}
        alt={game.name}
        width={150}
        height={150}
        className="mb-2 h-32 w-full rounded-md object-cover"
      />
      <h2 className="text-lg font-semibold">{game.name}</h2>
      <p className="text-sm">{game.description}</p>
      <p className="mt-2 text-sm">
        <strong>Categoria:</strong> {game.category}
      </p>
      <p className="text-sm">
        <strong>Adicionado em:</strong> {new Date(game.addedAt).toLocaleDateString('pt-BR')}
      </p>
      <p className="text-sm">
        <strong>Criado por:</strong> {game.createdBy}
      </p>
      <p className="text-sm">
        <strong>Popularidade:</strong> {game.popularity}
      </p>
      <button className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">
        Jogar
      </button>
    </div>
  );
};

export default GameCard;