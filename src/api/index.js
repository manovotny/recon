export const search = (term) => {
    const encoded = encodeURI(term);
    const url = `https://itunes.apple.com/search?term=${encoded}&media=music&entity=musicArtist&attribute=artistTerm`;

    return window.fetch(url)
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            throw error;
        });
};
