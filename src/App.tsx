import { useState } from 'react'
import './App.css'
import { Card } from './components/cards/card'
import { useProductData } from './hooks/useProductData'
import { CreateModal } from './components/create-modal/create-modal'

function App() {
  const { data } = useProductData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className="container">
      <h1>PRODUTOS LOJA STORE</h1>
      <div className="card-grid">
      {data?.map(productData =>  
        <Card 
          name={productData.name}
          price={productData.price}
          image={productData.image}
        />
        )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>novo</button>
      </div>
  )
}

export default App
