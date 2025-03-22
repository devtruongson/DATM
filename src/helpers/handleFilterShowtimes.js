export function handleBuildShowTimes(data = [], movie_id) {
    return data.filter((item) => parseInt(item.movie_id) === parseInt(movie_id));
}
