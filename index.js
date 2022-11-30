const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
]
function superbowlWin(record) {
    const res = record.find(record => record.result === "W")
}
if (res === undefined) {
    console.log("W")
}