"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = sendResponse;
function sendResponse(res, status, message, data) {
    res.status(status).json(Object.assign({ status, success: status < 400, message }, (data && { data })));
}
