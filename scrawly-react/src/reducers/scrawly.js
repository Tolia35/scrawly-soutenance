import {
    UPDATE_SLUG,
    SCRAWLY_SHOW_SUCCESS,
    SCRAWLY_SHOW_ERROR,
    SCRAWLY_CREATE_SUCCESS,
    SCRAWLY_CREATE_ERROR,
    UPDATE_TITLE,
    UPDATE_CHOICES,
    CHOICES_CREATE_SUCCESS,
    CHOICES_CREATE_ERROR,
    CHOICES_SHOW_SUCCESS,
    CHOICES_SHOW_ERROR,
} from "../actions/scrawly";

import slugme from "slugme";

const initialState = {
    scrawl: {
        title:"",
        slug:"",
        choices:[],
        person:[]
    },
    error: ""
}
function scrawlyApp (state = initialState, action){
    switch (action.type){

        case UPDATE_CHOICES:
            return {
                ...state,
                scrawl: { ...state.scrawl, choices: action.payload }
            };

        case UPDATE_SLUG:
            return {
                ...state,
                scrawl: { ...state.scrawl, slug: slugme (action.payload) }
            };

        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: { ...state.scrawl,title: action.payload, slug: slugme (action.payload) }
            };

        case SCRAWLY_SHOW_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };

        case SCRAWLY_SHOW_ERROR:
            return {
                ...state,
                error: " le scrawly n'existe pas"
            };

        case SCRAWLY_CREATE_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };

        case SCRAWLY_CREATE_ERROR:
            return {
                ...state,
                error: " le scrawly existe déja, merci de choisir un autre nom"
            };


        case CHOICES_CREATE_SUCCESS:
            return {
                ...state,
                choices: { ...state.scrawl, choices: action.payload }
            };

        case CHOICES_CREATE_ERROR:
            return {
                ...state,
                error: "La date n'a pas pu etre ajoutée"
            };

        case CHOICES_SHOW_SUCCESS:
            return {
                ...state,
                choices: { ...state.scrawl, choices: action.payload }
            };

        case CHOICES_SHOW_ERROR:
            return {
                ...state,
                choices: { ...state.scrawl, choices: action.payload }
            };
        default:
            return state;
    };
}
export default scrawlyApp;