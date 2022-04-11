/* As we are aiming to achieve a switch between dark and light, we create an action called changeMode  */

import { THEME_CHANGE } from "./constants";

// switch mode according to what is specified...
export const changeMode = (mode) => {
    return {
        type: THEME_CHANGE,
        payload: mode,
    };
};