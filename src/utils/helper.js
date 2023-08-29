export const filterData = (searchInput, restaurants) => {
    const newData = restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase()?.includes(searchInput.toLowerCase()));

    return newData;
}