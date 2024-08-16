import React from "react";

interface FilterProps {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  genderFilter: string;
  setGenderFilter: (value: string) => void;
}

const FilterComponent: React.FC<FilterProps> = ({
  statusFilter,
  setStatusFilter,
  genderFilter,
  setGenderFilter,
}) => {
  return (
    <div className="mb-4 p-6 bg-[#55AD9B] shadow-lg rounded-lg">
      <label className="mr-4 text-lg font-semibold text-gray-900">Status:</label>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32887c] transition-colors duration-300"
      >
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <label className="ml-6 mr-4 text-lg font-semibold text-gray-900">Gender:</label>
      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32887c] transition-colors duration-300"
      >
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default FilterComponent;
