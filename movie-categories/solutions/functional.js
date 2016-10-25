const MovieCategories = require("../movie-categories.json");

function getSmallestBoxart(boxarts) {
    return boxarts.reduce((result, boxart) => {
        if (!result)
            return boxart;

        const boxartArea = boxart.width * boxart.height;
        const resultArea = (result.width || 0) * (result.height || 0);

        return boxartArea < resultArea ? boxart : result;
    }, null);
}

function getMovies() {
    return MovieCategories.reduce((result, category) => {
        const videos = category.videos.map(({id, title, interestingMoments, boxarts}) => {
            const interestingMoment = interestingMoments.find(({type}) => type == "Middle");
            const smallestBoxArt = getSmallestBoxart(boxarts) || {};

            return {
                id,
                title,
                interestingMomentTime: interestingMoment && interestingMoment.time,
                smallestBoxArt: smallestBoxArt.url
            };
        });

        return result.concat(videos);
    }, []);
}

console.log(getMovies(MovieCategories));