
export interface Item {
    id: string,
    name: string,
    organizer: string,
    game: string,
    participants: participantType,
    startdate: string
}
export interface stateType {
    data: Item[],
    status: string
}
export interface actionType {
    type: string,
    payload: Item[]
}
export interface participantType {
    current: number,
    max: number
}
export const NOT_FOUND_STRING = 'No tournaments found.'
export const LOADING_STRING = 'Loading Tournaments...'
export const ERROR_STRING = 'Something went wrong.'
export const OK_STRING = ''
