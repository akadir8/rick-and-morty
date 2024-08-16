import { GetServerSideProps } from "next";
import { useState } from "react";

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface Props {
  characters: Character[];
}

const Home = ({ characters }: Props) => {
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<string>("");

  const filteredCharacters = characters.filter(character => {
    return (
      (statusFilter === "" || character.status === statusFilter) &&
      (genderFilter === "" || character.gender === genderFilter)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800 tracking-wide shadow-lg p-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text rounded-lg">
        Rick and Morty Characters
      </h1>

      <div className="flex justify-center items-center bg-gray-10">
        <div className="mb-4 p-6 bg-[#55AD9B] shadow-lg rounded-lg">
          <label className="mr-4 text-lg font-semibold text-gray-900">
            Status:
          </label>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32887c] transition-colors duration-300"
          >
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <label className="ml-6 mr-4 text-lg font-semibold text-gray-900">
            Gender:
          </label>
          <select
            value={genderFilter}
            onChange={e => setGenderFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32887c] transition-colors duration-300"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredCharacters.map(character => (
          <div
            key={character.id}
            className="bg-[#98b9bd] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-[#42739d] flex"
          >
            <div className="w-1/3">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="p-4 w-2/3">
              <h2 className="text-2xl font-bold text-slate-950">
                {character.name}
              </h2>
              <p className="text-gray-900">Status: {character.status}</p>
              <p className="text-gray-900">Gender: {character.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return {
    props: {
      characters: data.results,
    },
  };
};

export default Home;
