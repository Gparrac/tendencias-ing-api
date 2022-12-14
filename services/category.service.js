// require('dotenv').config()
class CategoryService {

  async getProductsByCategory(category, country) {
    try {
        
      console.log(process.env.ACCESS_TOKEN);
      const url = `https://api.mercadolibre.com/sites/${country}/search?category=${category}`;
      const rta = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.CLIENT_ID}`,
        },
      });
      
      return await rta.json();
    } catch (err) {
      throw err;
    }
  }
  async allCategories(country){
    try {
        console.log(process.env.ACCESS_TOKEN);
        const url = `https://api.mercadolibre.com/sites/${country}/categories`;
        const rta = await fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.CLIENT_ID}`,
          },
        });
        return await rta.json();
      } catch (err) {
        throw err;
      }
    }
  async getCategory(country,category){
    
    const all = await this.allCategories(country,category)
    const dataCat = all.find(({id}) => id == category);
    return dataCat

  }
}
module.exports = CategoryService;
