
const fileFormate =(url ="") =>{
    const fileExtesion = url.split(".").pop();
    if(fileExtesion ==="mp4" ||fileExtesion ==="webm" || fileExtesion==="ogg")
        return "video";

    if(fileExtesion ==="mp3" ||fileExtesion ==="wav" || fileExtesion==="ogg")
        return "audio";

    if(fileExtesion ==="jpg" ||fileExtesion ==="jpeg" || fileExtesion==="png" || fileExtesion==="svg" || fileExtesion==="gif")
        return "image";



    return "file";

}

const transformImage = (url ="",width=100) => url;

export {fileFormate,transformImage}