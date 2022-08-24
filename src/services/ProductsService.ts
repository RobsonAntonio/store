import Api from "./api/api"

const FindAllProducts = async () => {

return await Api.get(`products?page=1&rows=8&sortBy=id&orderBy=ASC`)

}

export const ProductsService = {
FindAllProducts,


}