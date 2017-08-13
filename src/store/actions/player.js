export const PLAY = 'play';
export const PAUSE = 'pause';
export const STOP = 'stop';

export const play = () => {
    return {
        type: PLAY
    };
};

export const pause = () => {
    return {
        type: PAUSE
    };
};

export const stop = () => {
    return {
        type: STOP
    };
};
