const CategoryService = require("./category.service");

const catService = new CategoryService();

class MarkService {
    async totalMarks(country, category){
        const data = await catService.getProductsByCategory(category,country);
        const cleanData = data.results.map(item =>{
            if(item?.attributes?.length>0){        
                return item.attributes[0].value_name.toUpperCase();
            }
        })
        return cleanData.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})        
    }
}
module.exports = MarkService