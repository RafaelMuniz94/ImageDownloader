const axios = require('axios')
const folder = require('./folder')

let imageDownload = 'https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg'




module.exports.DownloadImage = async function(path,urls){
    urls = [imageDownload,imageDownload,imageDownload,imageDownload]

    const promises = urls.map(async (url) =>{
         axios({
            method:"get",
            url,
            resposeType: "stream"
        }).then(function(response){
            path = `${path}/${url.split('/').pop()}`
            response.data.pipe(folder.SaveImage(path))
        })
    })

    await Promise.all(promises)
}