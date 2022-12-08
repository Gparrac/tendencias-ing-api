

require('dotenv').config()
const body = {
    grant_type: 'refresh_token',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    refresh_token:  process.env.REFRESH_TOKEN,
}
async function setToken(){
    const token = await fetch(
        'https://api.mercadolibre.com/oauth/token',
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-from-urlencoded',
            },
            body:JSON.stringify(body)
        }
        )
        process.env.ACCESS_TOKEN = (await token.json()).access_token;

}
module.exports = {setToken}