import { defineStore, createPinia } from 'pinia'

const useStore = defineStore('store',{
    state: () =>({
        cart:[],
        amount:0,
        products:[
            {
                id: 1,
                title: 'Faux Strelitzia Leaf Pair',
                price: 100.00,
                category: 'decor',
                sale: false,
                img: 'planter1.jpg',
        
              },
              {
                id: 2,
                title: 'Rohini Daybed',
                price: 1119.99,
                category: 'furniture',
                sale: false,
                img: 'daybed1.jpg',
          
              },
              {
                id: 3,
                title: 'Marte Basket Table',
                price: 179.99,
                category: 'furniture',                
                img: 'basket-table.jpg',           
              },
              {
                id: 4,
                title: 'Modular Velvet Sofa',
                price: 549.00,
                category: 'furniture',            
                img: 'sofa1.jpg',        
              },
              {
                id: 5,
                title: 'Vinyl Record Storage Set',
                price: 29.99,
                category: 'furniture',
           
                img: 'rack.jpg',          
              },
              {
                id: 6,
                title: '10" Marble Planter',
                price: 58.99,
                category: 'decor',
                
                img: 'planter2.jpg',
        
              },
              {
                id: 7,
                title: 'Desert Moonflower Credenza',
                price: 998.00,
                category: 'men',
       
                img: 'credenza.jpg',
          
              },
              {
                id: 8,
                title: 'Leni Leaning Mirror',
                price: 139.90,
                category: 'decor',

                img: 'mirror1.jpg',
             
              },
              {
                id: 9,
                title: 'Claudio Dining Set',
                price: 899.00,
                category: 'furniture',
                
                img: 'dining.jpg',
           
              },
              {
                id: 10,
                title: 'Symbology Banner',
                price: 129.99,
                category: 'decor',

                img: 'bunting.jpg',
               
              },
              {
                id: 11,
                title: 'Reema Sofa Set',
                price: 80.99,
                category: 'furniture',
                img: 'sofa2.jpg',
        
              },
              {
                id: 12,
                title: 'Blush Velvet Daybed',
                price: 1179.89,
                category: 'furniture',
                
                img: 'daybed2.jpg',
             
              },
              {
                id: 13,
                title: 'Polka Dot Wicker Basket',
                price: 69.00,
                category: 'decor',
                img: 'wicker.jpg',
         
              },
              {
                id: 14,
                title: 'Stripe Rag Rug',
                price: 29.99,
                category: 'decor',
                img: 'rag.jpg',
          
              },
              {
                id: 15,
                title: 'Rosalie Velvet Bed',
                price: 1820.90,
                category: 'furniture',
                img: 'bed.jpg'
            
              },
              {
                id: 16,
                title: 'Wire Loop Vanity',
                price: 159.00,
                category: 'furniture',
                img: 'vanity.jpg',
              }
        ]
    }),
    actions:{
      addToCart(product){
        this.cart.push(product)
      },
      removeFromCart(object){
        this.cart.slice(this.cart.indexOf(object), 1)
      }
    }
})

const pinia = createPinia();

export function useStoreInfo(){
    const store = useStore(pinia)

    return{
        cart:store.cart,
        products:store.products,
        amount:store.amount,
        addToCart:store.addToCart,
        removeFromCart:store.removeFromCart,
    }
}