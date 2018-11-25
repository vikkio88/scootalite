import {historyHelper} from "../libs/utils/historyHelper";

const fakePodcast = {id: 23};
const fakeCache = () => {
    return {
        items: {},
        setItem(key, item) {
            this.items[key] = item;
        },
        getItem(key) {
            return this.items[key] || null;
        }
    };
};

describe('Podcast History', () => {
    test('it saves the id of the podcast you played', () => {
        const historyHelperInstance = historyHelper(fakeCache());
        historyHelperInstance.pushPodcast(fakePodcast);
        expect(historyHelperInstance.getPodcasts()).toContain(fakePodcast.id);
    });

    test('it returns empty array if none have been set', () => {
        const historyHelperInstance = historyHelper(fakeCache());
        expect(historyHelperInstance.getPodcasts()).toEqual([]);
    });

    test('it only adds unique ids', () => {
        const historyHelperInstance = historyHelper(fakeCache());
        historyHelperInstance.pushPodcast(fakePodcast);
        expect(historyHelperInstance.getPodcasts()).toContain(fakePodcast.id);
        historyHelperInstance.pushPodcast(fakePodcast);
        expect(historyHelperInstance.getPodcasts()).toContain(fakePodcast.id);
        expect(historyHelperInstance.getPodcasts()).toEqual([fakePodcast.id]);
        historyHelperInstance.pushPodcast({id: 45});
        expect(historyHelperInstance.getPodcasts()).toEqual([fakePodcast.id, 45]);
    });
});

describe('Latest Podcast', () => {
    test('it returns the latest podcast that you were listening if it is set', () => {
        const historyHelperInstance = historyHelper(fakeCache());
        const podcast = {slug: 'a', id: 221};
        const seek = 123;
        historyHelperInstance.saveLastPlayed(podcast, seek);
        expect(historyHelperInstance.getLastPlayed()).toEqual({podcast, seek});
    });

    test('it replace the latest podcast that you were listening if it is set on top of that one', () => {
        const historyHelperInstance = historyHelper(fakeCache());
        const podcast = {slug: 'a', id: 221};
        const seek = 123;
        historyHelperInstance.saveLastPlayed(podcast, seek);
        expect(historyHelperInstance.getLastPlayed()).toEqual({podcast, seek});
        const podcast2 = {slug: 'B', id: 223};
        historyHelperInstance.saveLastPlayed(podcast2);
        expect(historyHelperInstance.getLastPlayed()).toEqual({podcast: podcast2, seek: null});
    });
});
