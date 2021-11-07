import * as api from './api.js';

api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getGames() {
    return await api.get(api.settings.host + '/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function createGame(game) {
    return await api.post(api.settings.host + '/data/games', game);
}

export async function getGameById(id) {
    return await api.get(api.settings.host + '/data/games/' + id);
}

export async function updateGame(id, game) {
    return await api.put(api.settings.host + '/data/games/' + id, game);
}