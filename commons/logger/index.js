module.exports = (identity = '', message = '') => {
    if (message) {
        console.log(identity ?? '', message);
    }
};
