const getFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) return JSON.parse(favorites);
    return [];
}

const addFavorite = (phone) => {
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id);
    if (isExist) return console.log("Phone Already Added");
    favorites.push(phone);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const removeFavorite = (id) => {
    const favorites = getFavorites();
    const remainingFavorites = favorites.filter(phone => phone.id !== id);
    localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
}

export { getFavorites, addFavorite, removeFavorite };
