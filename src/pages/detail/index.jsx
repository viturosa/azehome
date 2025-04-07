import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { db } from "../../utils/firebase"
import { collection, getDocs } from "firebase/firestore"
import './style.css'

const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
	const [currentImage, setCurrentImage] = useState("")

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				console.log("Buscando produto com ID:", id)

				const categoriesSnapshot = await getDocs(collection(db, "categories"))

				for (const categoryDoc of categoriesSnapshot.docs) {
					console.log("Verificando categoria:", categoryDoc.id)


					const categoryData = categoryDoc.data()


					if (categoryData.items) {

						const foundProduct = categoryData.items.find(item => item.id === Number(id))

						if (foundProduct) {
							console.log("Produto encontrado:", foundProduct)
							setProduct(foundProduct)
							setCurrentImage(foundProduct.imageUrl)
							return;
						}
					}
				}
				console.log("Produto não encontrado.")
			} catch (error) {
				console.error("Erro ao buscar produto:", error)
			}
		}

		fetchProduct()
	}, [id])
	const toggleImage = () => {
    if (!product) return

    setCurrentImage(prev =>
      prev === product.imageUrl ? product.imageUrl2 : product.imageUrl
    )
  }

  if (!product) return <p>Carregando...</p>

  return (
    <div className='product-detail'>
      <h1>{product.name}</h1>
			<img src={currentImage} alt={product.name} />

<div className='img-selector'>
	<button className='img-square' onClick={toggleImage}></button>
	<button className='img-square' onClick={() => setCurrentImage(product.imageUrl)}></button>
</div>
      <p>{product.description}</p>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
    </div>
  )
}

export default Detail
