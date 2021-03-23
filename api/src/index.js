const { default: startServer } = require("./server/httpServer");

(async () => {
    await startServer();
})();