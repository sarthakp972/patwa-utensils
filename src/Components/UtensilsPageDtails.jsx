// pages/utensil/[id].js
import { useRouter } from 'next/router';
import UtensilDetail from './UtensilDetail';


const UtensilDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the product details based on the ID from your data source
  const product = getProductDetailsById(id); // Replace this with your actual data fetching logic

  return (
    <UtensilDetail product={product} />
   
  );
}

export default UtensilDetailPage;
