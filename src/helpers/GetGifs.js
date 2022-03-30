



 export const GetGifs = async(Category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(Category)}&limit=10&api_key=XpKVbypJLghM0ocmfwNwst6TpBLGfJkN`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const Gis = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return Gis;

}










