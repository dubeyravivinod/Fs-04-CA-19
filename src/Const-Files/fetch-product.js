export const Data_fetch= async(setProduct)=>{

    const api=await fetch ('https://fakestoreapi.com/products')
    const data=await api.json();
    setProduct(data)
}