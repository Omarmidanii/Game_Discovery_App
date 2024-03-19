import Broken_image from "../assets/broken_Image.jfif";
const GetCroppedImage = (url: string) => {
  if (!url) return Broken_image;
  let index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default GetCroppedImage;
