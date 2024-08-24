import React from 'react';

const categories = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  // Add more categories as needed
];

const Test = () => {
  return (
    <div className="bg-gray-200 p-4 inline-block   ">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <a href={`/category/${category}`} className="text-blue-600 hover:underline">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Test;
