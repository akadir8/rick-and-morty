import React from "react";

interface CharacterProps {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

const CharacterCard: React.FC<CharacterProps> = ({ id, name, status, gender, image }) => {
  return (
    <div
      key={id}
      className="bg-[#98b9bd] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-[#42739d] flex"
    >
      <div className="w-1/3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="p-4 w-2/3">
        <h2 className="text-2xl font-bold text-slate-950">{name}</h2>
        <p className="text-gray-900">Status: {status}</p>
        <p className="text-gray-900">Gender: {gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
