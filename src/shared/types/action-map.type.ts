export type T_ActionMap<M extends { [index: string]: unknown }> = {
    [key in keyof M]: M[key] extends undefined ? { type: key } : { type: key; payload: M[key] };
}