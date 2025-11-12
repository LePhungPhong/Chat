"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turn_controller_1 = require("../controllers/turn.controller");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const router = (0, express_1.Router)();
router.get('/credentials', (0, asyncHandler_1.asyncHandler)(turn_controller_1.getTurnCredentials));
exports.default = router;
