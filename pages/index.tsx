import { GetServerSideProps } from "next";
import { useState } from "react";
import FilterComponent from "./filter";
import CharacterCard from "./character";

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

  const filteredCharacters = characters.filter((character) => {
    return (
      (!statusFilter || character.status === statusFilter) &&
      (!genderFilter || character.gender === genderFilter)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800 tracking-wide shadow-lg p-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text rounded-lg">
        Rick and Morty Characters
      </h1>

      <div className="flex justify-center items-center bg-gray-10">
        <FilterComponent
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} {...character} />
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
