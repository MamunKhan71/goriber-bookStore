import { useState, useEffect } from 'react'
import './App.css'
import Book from './Book';

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);
  return (
    <>
      <div className='container mx-auto mt-24 flex gap-6'>
        <div className='grid grid-cols-3 gap-8'>
          {
            product.map(books => (
              <Book key={books.id} book={books}></Book>
            ))
          }
        </div>
        <div className='basis-1/3'>
          <div className='border rounded-xl'>
            <div className="overflow-x-auto">
              <table className="table text-center">
                <thead>
                  <tr className='text-base'>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
