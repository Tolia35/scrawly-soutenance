export const UPDATE_SLUG = "UPDATE_SLUG";

export function updateSlug(slug){
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}
export function scrawlyAdd(scrawly) {
    let newScrawly = new Scrawly();
    return (dispatch) => fetch().then(
        success => dispatch(dashboardAddSuccess(success)),
        error => dispatch(dashboardAddError(error))
    )
}

export function dashboardAddSuccess(dashboard) {
    return {
        type: DASHBOARD_ADD_SUCCESS,
        payload: {dashboard: dashboard}};
}

export function dashboardAddError(error) {
    return {
        type: DASHBOARD_ADD_ERROR,
        payload: error, error: true};
}