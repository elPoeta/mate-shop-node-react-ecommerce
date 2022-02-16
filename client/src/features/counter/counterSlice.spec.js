"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const counterSlice_1 = __importStar(require("./counterSlice"));
describe('counter reducer', () => {
    const initialState = {
        value: 3,
        status: 'idle',
    };
    it('should handle initial state', () => {
        expect((0, counterSlice_1.default)(undefined, { type: 'unknown' })).toEqual({
            value: 0,
            status: 'idle',
        });
    });
    it('should handle increment', () => {
        const actual = (0, counterSlice_1.default)(initialState, (0, counterSlice_1.increment)());
        expect(actual.value).toEqual(4);
    });
    it('should handle decrement', () => {
        const actual = (0, counterSlice_1.default)(initialState, (0, counterSlice_1.decrement)());
        expect(actual.value).toEqual(2);
    });
    it('should handle incrementByAmount', () => {
        const actual = (0, counterSlice_1.default)(initialState, (0, counterSlice_1.incrementByAmount)(2));
        expect(actual.value).toEqual(5);
    });
});
