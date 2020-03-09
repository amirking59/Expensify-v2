import selectExpenses from "../../selectors/expenses";

const expenses = [{
    id: 10,
    description: "sein",
    note: "note1",
    amount: 11,
    createdAt: 102
},{
    id: 20,
    description: "hossein",
    note: "note2",
    amount: 21,
    createdAt: 22
},{
    id: 30,
    description: "rezayy",
    note: "note3",
    amount: 31,
    createdAt: 32
}
];
test("should filter by text value", () => {
    const filters = {
        text: "sein",
        sortBy : "date",
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});