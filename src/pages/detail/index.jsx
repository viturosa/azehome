import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { db } from "../../utils/firebase"
import { collection, getDocs } from "firebase/firestore"
import './style.css'

const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				console.log("Buscando produto com ID:", id);

				const categoriesSnapshot = await getDocs(collection(db, "categories"));

				for (const categoryDoc of categoriesSnapshot.docs) {
					console.log("Verificando categoria:", categoryDoc.id);


					const categoryData = categoryDoc.data();


					if (categoryData.items) {

						const foundProduct = categoryData.items.find(item => item.id === Number(id));

						if (foundProduct) {
							console.log("Produto encontrado:", foundProduct);
							setProduct(foundProduct);
							return;
						}
					}
				}
				console.log("Produto não encontrado.");
			} catch (error) {
				console.error("Erro ao buscar produto:", error);
			}
		};

		fetchProduct();
	}, [id]);

  if (!product) return <p>Carregando...</p>

  return (
    <div className='product-detail'>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
    </div>
  )
}

export default Detail;
