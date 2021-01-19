import React, { useEffect, useState } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');
  // const [animal, setAnimal] = useState('dog');
  // const [breed, setBreed] = useState('breed');

  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  // Use Effect runs after the render happens.
  // It is not synchronous so doesnt run just after the render but soon after the render
  // 2nd parameter is a list of dependancies, the change in dependencies trigger useEffect to run.

  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;

// Hooks can never be inside for loops or if statements
// key tells React that only some reorder has been done, but should be unique
