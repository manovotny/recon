const fetch = (url) => {
    return window.fetch(url)
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            throw error;
        });
};

export const searchMovies = (term) => {
    const encodedTerm = encodeURI(term);
    const url = `http://itunes.apple.com/search?term=${encodedTerm}&media=movie&entity=movie&attribute=movieTerm`;

    return fetch(url);
};

export const searchMusic = (term) => {
    const encodedTerm = encodeURI(term);
    const url = `http://itunes.apple.com/search?term=${encodedTerm}&media=music&entity=musicArtist&attribute=artistTerm`;

    return fetch(url);
};
