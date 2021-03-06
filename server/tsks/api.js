// http://api.douban.com/v2/movie/subject/1764796

const rp = require('request-promise-native');

async function fetchMovie(item){
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`;
    const res = await rp(url);
    return res;
}
(async ()=>{
    let movies = [
        {
            doubanId: 1293544,
            title: '沉默的羔羊',
            rate: 8.7,
            poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p1593414327.jpg'
        },
        {
            doubanId: 3287562,
            title: '神偷奶爸',
            rate: 8.5,
            poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p792776858.jpg'
        }
    ];

    movies.map( async movie => {
        let movieData = await fetchMovie(movie);
        try{
            movieData = JSON.parse(movieData);
            console.log(movieData.tags);
            console.log(movieData.summary);
        }
        catch(err){
            console.log(err)
        }
        console.log(movieData)
    })
})();