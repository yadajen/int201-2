function isImageFileExtension(filename) {
  return (
    filename.endsWith('.png') ||
    filename.endsWith('.jpg') ||
    filename.endsWith('.jpeg') ||
    filename.endsWith('.gif') ||
    filename.endsWith('.svg')
  )
}
console.log(isImageFileExtension('djnfyjy.png'))
console.log(isImageFileExtension('djnfyjy.jpg'))
