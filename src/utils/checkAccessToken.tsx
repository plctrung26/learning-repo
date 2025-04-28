export const waitForSessionToken = (timeout = 2000): Promise<void> => {
    return new Promise((resolve, reject) => {
        const interval = 50;
        const start = Date.now();
        function check() {
            if (sessionStorage.getItem('access_token')) {
                resolve();
            } else if (Date.now() - start > timeout) {
                reject(new Error('Timeout waiting for access_token'));
            } else {
                setTimeout(check, interval);
            }
        }
        check();
    });
};