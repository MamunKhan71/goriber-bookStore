import { useState, useEffect } from 'react'
import './App.css'
import Book from './Book'

function App() {
  const [cart, setCart] = useState([]);
  const [sums, setSum] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);


  const handleCart = book => {
    setCart([...cart, book]);
    setSum([...sums, book.discountPrice])
  }
  return (
    <>
      <div className='container mx-auto mt-24 flex gap-6'>
        <div className='grid grid-cols-3 gap-8'>
          {
            product.map(books => (
              <Book key={books.id} handleCart={handleCart} book={books}></Book>
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
                    cart.map(crt => (
                      <>
                        <tr>
                          <td>{crt.name}</td>
                          <td>{crt.discountPrice}</td>
                        </tr>
                      </>
                    ))
                  }
                  <tr>
                    <td className='font-bold'>সর্বমোট</td>
                    <td className='font-bold'>{sums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
