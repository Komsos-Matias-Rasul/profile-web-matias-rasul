export const AdCarouselConstructor = (adsArray, nSlides) => {
  const adUrl = adsArray.map((ad) => process.env.GCLOUD_PREFIX + ad)
  const carousels = new Array()
  for (let i = 0; i < nSlides; i++){
    if (i === 0) {
      carousels.push(adUrl)
      continue
    }
    let splitIndex = i
    const rightSide = adUrl.slice(splitIndex)
    const leftSide = adUrl.slice(0,i)
    carousels.push([...rightSide, ...leftSide])
  }
  return carousels
}