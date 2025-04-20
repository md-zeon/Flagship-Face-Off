import toast from "react-hot-toast";

const getFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) return JSON.parse(favorites);
    return [];
}

const addFavorite = (phone) => {
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id);
    if (isExist) return toast.error("Phone Already Added");
    favorites.push(phone);
    toast.success('Phone Added Successfully!!');
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const removeFavorite = (id) => {
    const favorites = getFavorites();
    const remainingFavorites = favorites.filter(phone => phone.id !== id);
    localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
    toast.success("Removed Successfully!!");
}


const getCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart) return JSON.parse(cart);
    return [];
}

const addToCart = (phone) => {
    const cart = getCart();
    const isExist = cart.find(p => p.id === phone.id);
    if (isExist) return toast.error("Phone Already Added");
    cart.push(phone);
    toast.success('Phone Added Successfully!!');
    localStorage.setItem("cart", JSON.stringify(cart));
};

const removeCart = (id) => {
    const cart = getCart();
    const remainingCart = cart.filter(phone => phone.id !== id);
    localStorage.setItem("cart", JSON.stringify(remainingCart));
    toast.success("Removed Successfully!!");
}



export { getFavorites, addFavorite, removeFavorite, getCart, addToCart, removeCart };
