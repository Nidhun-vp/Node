const path=require('path')

const mypath='C:\Users\nidhun\Desktop\mern\Node\Fileoperation\myfolder2\myfile.txt'

const pathInfo={
    filename:path.basename(mypath),
    folderName:path.dirname(mypath),
    fileExtensions:path.extname(mypath),
    absoluteOrNot:path.isAbsolute(mypath),
    detailsInfo:path.parse(mypath),
    normalize:path.normalize(mypath)
}
console.log(pathInfo);