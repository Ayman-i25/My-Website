const imagesContext = require.context('../../../assets/imgs/design', false, /\.(png|jpe?g|svg)$/);

const images = imagesContext.keys().map((imagePath, index) => ({
    id: index + 1,
    src: imagesContext(imagePath)
}));
export const designData = images;
