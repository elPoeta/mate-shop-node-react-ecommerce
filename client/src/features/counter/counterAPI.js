"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCount = void 0;
function fetchCount(amount = 1) {
    return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}
exports.fetchCount = fetchCount;
