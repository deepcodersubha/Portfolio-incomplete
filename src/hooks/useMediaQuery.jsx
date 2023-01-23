import { useState, useEffect } from "react";

const MediaQuery = (query) => {
    const [matches, setMatches] = useState(false)


    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        window.addEventListener("resize", listener);
        return () => window.addEventListener("resize", listener)
    }, [matches, query]);

    return matches

}

export default MediaQuery