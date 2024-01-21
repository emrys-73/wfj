export const getImageURL = (/** @type {any} */ collectionId: unknown, /** @type {any} */ recordId: unknown, /** @type {any} */ fileName: unknown, size = '0x0') => {
    return `https://base.astralta.com:443/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
