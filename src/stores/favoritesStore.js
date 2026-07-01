import { defineStore } from "pinia";

const FAVORITES_STORAGE_KEY = "favorites";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || [],
  }),

  actions: {
    saveFavorites() {
      localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(this.favorites),
      );
    },

    addFavorite(item) {
      const exists = this.favorites.some(
        (favorite) => favorite._id === item._id,
      );

      if (!exists) {
        this.favorites.push({
          ...item,
          customTitle: item.name,
          customDescription:
            item.customDescription || "Personaje del universo Disney.",
          rating: 0,
        });

        this.saveFavorites();
      }
    },

    removeFavorite(id) {
      this.favorites = this.favorites.filter((favorite) => favorite._id !== id);
      this.saveFavorites();
    },

    updateFavorite(id, updatedData) {
      const favorite = this.favorites.find((favorite) => favorite._id === id);

      if (favorite) {
        Object.assign(favorite, updatedData);
        this.saveFavorites();
      }
    },

    rateFavorite(id, rating) {
      const favorite = this.favorites.find((favorite) => favorite._id === id);

      if (favorite) {
        favorite.rating = rating;
        this.saveFavorites();
      }
    },
  },
});
