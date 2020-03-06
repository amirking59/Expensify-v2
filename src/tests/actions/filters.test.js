import { setTextFilter ,sortByAmount, sortByDate, setStartDate, setEndDate} from "../../actions/filters";

test("should generate start date action object", () => {
    const action = setStartDate(1000);
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: 1000
    })
});

test("should generate end date action object", () => {
    const action = setEndDate(1000);
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: 1000
    })
});