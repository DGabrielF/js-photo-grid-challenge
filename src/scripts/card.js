import { state } from "./main.js";

export function Card(imageUrl, description) {
  const div = document.createElement("div");
  div.classList.add("card_photo");
  div.innerHTML = `
    <div class="card_image">
      <img src="${imageUrl}" alt="">
    </div>
    <div class="card_details">
      <div class="card_icon">${state.images.emptyHeartImage}</div>
      <div class="card_description">${description}</div>
    </div>
  `
  return div
}