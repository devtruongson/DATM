export const handleBuilderMovies = (movie) => {
    return {
        ...movie,
        name: movie?.title,
        thumbnail: movie?.poster || '',
        trailer_url: movie?.trailer || '',
        categories: movie?.genres || [],
        rate: movie?.rating || 0,
        date: movie?.release_date || '',
    };
};
