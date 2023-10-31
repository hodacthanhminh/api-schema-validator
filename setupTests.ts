const consoleError = console.error;
console.error = (err, ...args) => {
    consoleError(err, ...args);
    throw new Error(err);
};
