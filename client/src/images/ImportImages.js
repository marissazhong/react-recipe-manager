function importAll(r) {
    let images = {};
    r.keys().map((item) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const Images = importAll(require.context('./recipes', false, /\.(png|jpe?g|svg)$/));

export default Images;