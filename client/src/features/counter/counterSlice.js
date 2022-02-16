"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementIfOdd = exports.selectCount = exports.incrementByAmount = exports.decrement = exports.increment = exports.counterSlice = exports.incrementAsync = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const counterAPI_1 = require("./counterAPI");
const initialState = {
    value: 0,
    status: 'idle',
};
exports.incrementAsync = (0, toolkit_1.createAsyncThunk)('counter/fetchCount', async (amount) => {
    const response = await (0, counterAPI_1.fetchCount)(amount);
    return response.data;
});
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(exports.incrementAsync.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(exports.incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
        });
    },
});
_a = exports.counterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
const selectCount = (state) => state.counter.value;
exports.selectCount = selectCount;
const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = (0, exports.selectCount)(getState());
    if (currentValue % 2 === 1) {
        dispatch((0, exports.incrementByAmount)(amount));
    }
};
exports.incrementIfOdd = incrementIfOdd;
exports.default = exports.counterSlice.reducer;
