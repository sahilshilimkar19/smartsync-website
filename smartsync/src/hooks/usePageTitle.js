import { useEffect } from 'react';

// Gives each route a descriptive document title (WCAG 2.4.2) by updating the single <title> in index.html
const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default usePageTitle;
