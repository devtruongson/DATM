export const handleReBuildGenres = (genres) => {
    return {
        id: genres?.id,
        label: genres?.name,
        values: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
    };
};
