export const categories = [
    'All',
    'Programming',
    'Entertainment',
    'Comedy',
    'TV/Radio',
    'Sport'
];

export const byCategory = name => {
    return show => {
        if (name === categories[0]) return true;
        return show.categories.filter(c => c.name === name).length;
    }
};