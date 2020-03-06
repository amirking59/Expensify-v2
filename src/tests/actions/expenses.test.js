import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove action object', () => {
    const action = removeExpense({ id: "abc123"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "abc123"
    })
});

test('should setup edit action object', () => {
    const action = editExpense("abc123", "hello" );
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "abc123",
        updates: "hello"
    })
});

test("should setup add expense action object with provided value", () => {
    const action = addExpense({ description: "hello", createdAt: 1, amount: 2,note: "map" });
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "hello",
            createdAt: 1,
            amount: 2,
            note: "map"
        }

    })
});

test("should setup add expense action object with default value", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            createdAt: 0,
            amount: 0,
            note: ""
        }

    })
});

