export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=fiUKUtv3J5n96ix8PK4C5Ec55u18ZWjC&limit=10`;
        const res = await fetch(url)
        const {data} = await res.json();
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });
        return gifs;
}