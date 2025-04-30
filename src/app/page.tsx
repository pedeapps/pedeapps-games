import GameList from '@/app/components/GameList';

const Home = () => {
  return (
    <div className="space-y-6 h-screen">
      <h1 className="text-3xl font-bold">Jogos de Tecnologia</h1>
      <GameList />
    </div>
  );
};

export default Home;