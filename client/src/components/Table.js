import React from 'react';
import '../styles/Table.css'; 

const TableComponent = () => {
  // Data for the table
  const bookData = [
    { 
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Help',
      keyConcepts: 'Habit formation, small changes, continuous improvement',
      publicationYear: 2018
    },
    {
      title: 'Ikigai',
      author: 'Héctor García, Francesc Miralles',
      genre: 'Self-Help',
      keyConcepts: 'Finding purpose, happiness, longevity',
      publicationYear: 2016
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki	',
      genre: 'Personal Finance',
      keyConcepts: 'Financial literacy, assets vs liabilities, mindset',
      publicationYear: 1997
    },
    {
      title: 'The Millionaire Fastlane',
      author: 'MJ DeMarco',
      genre: 'Personal Finance',
      keyConcepts: 'Entrepreneurship, wealth acceleration, financial freedom',
      publicationYear: 2011
    },
    {
      title: 'How to win friends and influence people',
      author: 'Dale Carnegie',
      genre: 'Self-Improvement',
      keyConcepts: 'Communication, persuasion, social skills',
      publicationYear: 1936
    },
    {
      title: 'Rework',
      author: 'Jason Fried, David Heinemeier Hansson',
      genre: 'Business',
      keyConcepts: 'Entrepreneurship, productivity, unconventional business ideas',
      publicationYear: 2010
    },
    {
      title: 'Hooked',
      author: 'Nir Eyal',
      genre: 'Business',
      keyConcepts: 'Consumer psychology, habit-forming products, product design',
      publicationYear: 2014
   },
   {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Personal Finance',
    keyConcepts: 'Behavioral economics, money mindset, investment strategies',
    publicationYear: 2020
  }
    // ... (other book details)
  ];

  return (
    <section id='table'>
    <div className="table-container">
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Key Concepts</th>
            <th>Publication Year</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.keyConcepts}</td>
              <td>{book.publicationYear}</td>
            </tr>
          ))}
        </tbody>    
      </table>
    </div>
    </section>
  );
};

export default TableComponent;
