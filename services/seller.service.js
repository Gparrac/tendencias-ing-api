const CategoryService = require('./category.service')
const catServ = new CategoryService()
class SellerService{
    async  sellersByCategory(country, category){
        console.log('stamps sellers',category,country)
        const categoryData = await catServ.getProductsByCategory(category, country);
        return await Promise.all(
            categoryData.results.map( async (item) =>{
                const x = await this.infoSeller(item.seller.id);                                
                return x
             })
             ) 
             
    
        
    }
    async  infoSeller(idUser){
        try {            
            const url = `https://api.mercadolibre.com/users/${idUser}`;
            const rta = await fetch(url, {
              headers: {
                Authorization: `Bearer ${process.env.CLIENT_ID}`,
              },
            });
            const data = await rta.json();
            
            return {
                id: data.id,
                nickname: data.nickname,
                state: data.address.state,
                points: data.points,
                media: data.seller_reputation.transactions.completed - data.seller_reputation.transactions.canceled,
    
                
            }
          } catch (err) {
            throw err;
          }
    }
    async  bestSeller(country, category){
        try{
            const sellers = await this.sellersByCategory(country,category)
            const dataCat = await catServ.getCategory(country,category);
            const sellersPositive = sellers.map(item =>{
                return (item.media)
            })
            const max = Math.max(...sellersPositive)
             const rta = sellers.find(item => item.media == max)
             rta.category = dataCat.name
             return rta
        }catch(err){
            throw err;
        }

        
    }
    async  worstSeller(country, category){
        try{
            const sellers = await this.sellersByCategory(country,category)
            const dataCat = await catServ.getCategory(country,category);
            const sellersPositive = sellers.map(item =>{
                return (item.media)
            })
            const min = Math.min(...sellersPositive)
            const rta = sellers.find(item => item.media == min)
            rta.category = dataCat.name
            return rta
        }catch(err){
            throw err;
        }

        
    }
    async  groupByLocation(country, category){
        try{
            const sellers = await this.sellersByCategory(country,category)
            const sellersState = sellers.map(item =>{
                return (item.state)
            })
            return sellersState.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})    
        }catch(err){
            throw err;
        }

        
    }    
}
module.exports = SellerService;