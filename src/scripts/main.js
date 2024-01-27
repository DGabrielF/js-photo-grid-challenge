import { Card } from "./card.js";

export const state = {
  images: {
    emptyHeartImage: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M178,28c-20.09,0-37.92,7.93-50,21.56C115.92,35.93,98.09,28,78,28A66.08,66.08,0,0,0,12,94c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,224.14,244,166.34,244,94A66.08,66.08,0,0,0,178,28Zm-5.49,142.36A328.69,328.69,0,0,1,128,202.16a328.69,328.69,0,0,1-44.51-31.8C61.82,151.77,36,123.42,36,94A42,42,0,0,1,78,52c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,61.4,160.2,52,178,52a42,42,0,0,1,42,42C220,123.42,194.18,151.77,172.51,170.36Z"></path></svg>`,
    filledHeartImage: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path></svg>`,
  }
}

const myPhotos = [
  {
    imageUrl: "https://picsum.photos/237/536",
    description: "this is so beautiful"
  },
  {
    imageUrl: "https://picsum.photos/seed/picsum/536/354",
    description: "where you can touch the heaven..."
  },
  {
    imageUrl: "https://picsum.photos/id/1084/536/354?grayscale",
    description: "I think that I eat too much in this winter"
  },
  {
    imageUrl: "https://picsum.photos/id/1060/536/354?blur=2",
    description: "do you want some tea?"
  },
  {
    imageUrl: "https://picsum.photos/id/870/536/354?grayscale&blur=2",
    description: `I'll be the light to guide you`
  },
  {
    imageUrl: "https://picsum.photos/200/300",
    description: "how can I imagine?"
  },
  {
    imageUrl: "https://picsum.photos/200/400",
    description: "seem by otherside"
  },
  {
    imageUrl: "https://picsum.photos/300/300",
    description: "whats happen if..."
  },
  {
    imageUrl: "https://picsum.photos/400/300",
    description: "how can it be better?"
  },
  {
    imageUrl: "https://picsum.photos/420/300",
    description: "It's just a moment"
  },
  {
    imageUrl: "https://picsum.photos/400/330",
    description: "where you have been"
  },
  {
    imageUrl: "https://picsum.photos/450/300",
    description: "just enjoy"
  },
]

function init() {
  const photoContainer = document.querySelector(".photos_container");
  myPhotos.forEach(element => {
    const div = Card(element.imageUrl, element.description);
    photoContainer.appendChild(div);
  });


}

init()