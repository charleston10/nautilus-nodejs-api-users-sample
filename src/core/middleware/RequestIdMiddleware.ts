const crypto = require("crypto");

export = (req: any, res: any, next: any) => {
    const id = crypto.randomBytes(10).toString("hex");
    req.requestId = id;
    next()
}