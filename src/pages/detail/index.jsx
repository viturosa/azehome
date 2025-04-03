import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { db } from "../../utils/firebase"
import { collection, getDocs } from "firebase/firestore"

const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const categoriesSnapshot = await getDocs(collection(db, "categories"))

        for (const categoryDoc of categoriesSnapshot.docs) {
          const subcategoriesSnapshot = await getDocs(collection(categoryDoc.ref, "subcategories"))

          for (const subcategoryDoc of subcategoriesSnapshot.docs) {
            const productsSnapshot = await getDocs(collection(subcategoryDoc.ref, "products"))

            for (const productDoc of productsSnapshot.docs) {
              if (productDoc.id === id) {
                setProduct({ id: productDoc.id, ...productDoc.data() })
                return
              }
            }
          }
        }
      } catch (error) {
        console.error("Erro ao buscar produto:", error)
      }
    };

    fetchProduct();
  }, [id])

  if (!product) return <p>Carregando...</p>

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} style={{ maxWidth: "300px" }} />
      <p>{product.description}</p>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
    </div>
  )
}

export default Detail;
