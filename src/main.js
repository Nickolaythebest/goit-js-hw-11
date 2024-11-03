// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const gallery = document.getElementById("gallery");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();

    // Перевірка на порожній запит
    if (!query) {
        iziToast.error({ title: "Error", message: "Please enter a search term." });
        return;
    }

    showLoader(); // Показати лоадер
    gallery.innerHTML = ''; // Очищення галереї перед новим запитом

    fetchImages(query)
        .then(images => {
            // Якщо зображення не знайдені
            if (images.length === 0) {
                iziToast.warning({ message: "Sorry, there are no images matching your search query. Please try again!" });
            } else {
                renderGallery(images); // Відображення зображень
            }
        })
        .catch(() => {
            iziToast.error({ title: "Error", message: "Something went wrong. Please try again later." });
        })
        .finally(() => {
            hideLoader(); // Сховати лоадер
            input.value = ''; // Очищення поля вводу
        });
});
