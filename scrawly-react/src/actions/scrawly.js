export const UPDATE_SLUG = "UPDATE_SLUG";
export const UPDATE_CHOICES = "UPDATE_CHOICES";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const SCRAWLY_SHOW_ERROR = "SCRAWLY_SHOW_ERROR";
export const SCRAWLY_SHOW_SUCCESS = "SCRAWLY_SHOW_SUCCESS";
export const SCRAWLY_CREATE_ERROR = "SCRAWLY_CREATE_ERROR";
export const SCRAWLY_CREATE_SUCCESS = "SCRAWLY_CREATE_SUCCESS";
export const CHOICES_CREATE_SUCCESS = "CHOICES_CREATE_SUCCESS";
export const CHOICES_CREATE_ERROR = "CHOICES_CREATE_SUCCESS";
export const CHOICES_SHOW_SUCCESS = "CHOICES_SHOW_SUCCESS";
export const CHOICES_SHOW_ERROR = "CHOICES_SHOW_ERROR";

/* update slug, title et choices */
export function updateSlug(slug) {
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}
export function updateTitle(title) {
    return {
        type: UPDATE_TITLE,
        payload: title
    };
}
export function updateChoices(choices) {
    return {
        type: UPDATE_CHOICES,
        payload: choices
    };
}

/*  scrawly show */
export function scrawlyShow(slug) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/polls?slug=' + slug)
            .then(response => response.json())
            .then(data => {
                if (data["hydra:member"].length > 0) {
                    dispatch(scrawlyShowSuccess(data["hydra:member"][0]));
                } else {
                    dispatch(scrawlyShowError());
                }
            })
    }
}

/* Scrawly Create*/

export function scrawlyCreate(scrawl) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/polls', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scrawl)
        })
            .then(response => response.json())
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(scrawlyCreateSuccess(data));
                } else {
                    dispatch(scrawlyCreateError());
                }
            })
    }
}

/* Choices create */

export function choicesCreate(scrawl) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/choices', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scrawl)
        })
            .then(response => response.json())
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(choicesCreateSuccess(data));
                } else {
                    dispatch(choicesCreateError());
                }
            })
    }
}

/* Choices show */

export function choicesShow(scrawl) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/choices', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scrawl)
        })
            .then(response => response.json())
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(choicesShowSuccess(data));
                } else {
                    dispatch(choicesShowError());
                }
            })
    }
}


/* scrawly show success et error  */
export function scrawlyShowSuccess(scrawl) {
    return {
        type: SCRAWLY_SHOW_SUCCESS,
        payload: scrawl
    };
}
export function scrawlyShowError() {
    return { type: SCRAWLY_SHOW_ERROR };
}

/* Scrawly create success et error */

export function scrawlyCreateSuccess(scrawl) {
    return {
        type: SCRAWLY_SHOW_SUCCESS,
        payload: scrawl
    };
}
export function scrawlyCreateError() {
    return { type: SCRAWLY_CREATE_ERROR };

}

/* Choices create success et error */

export function choicesCreateSuccess(choices) {
    return {
        type: CHOICES_CREATE_SUCCESS,
        payload: choices
    };
}
export function choicesCreateError() {
    return { type: CHOICES_CREATE_ERROR };
}

/* choices show success et error  */
export function choicesShowSuccess(choices) {
    return {
        type: CHOICES_SHOW_SUCCESS,
        payload: choices
    };
}
export function choicesShowError() {
    return { type: CHOICES_SHOW_ERROR };
}

//pour chaque actions ( export en haut + export fonction + export fonction )  > reducer ( import + case )  > container ( import en haut + const map ) > component ( ++ )