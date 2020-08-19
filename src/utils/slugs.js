// makes slugs with given length

export const makeSlug = (len) => {
    let result = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // loop thru len and pick random chars
    for (let i = 0; i < len; i ++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}