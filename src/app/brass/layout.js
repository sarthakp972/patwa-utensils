import Footer from "@/Components/Footer";
import ProductCart_brass from "@/Components/ProductCart_brass";
import Side_categ from "@/Components/Side_categ";


export default function Layout({childern}){
    return(
        <>
        <div className='flex gap-10 container'>
            <div>
        <Side_categ/>
        </div>

        <div>
          <ProductCart_brass />
    
        </div>

        </div>
        <Footer/>
        {childern}
        </>
    )
}
