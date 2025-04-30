//callback hell

function data(dataIds, next_dataIds) {
    setTimeout(() => {
        console.log("data :", dataIds);

        if (next_dataIds) {
            next_dataIds();
        }
    }, 2000)

}
//Due to this code it is called callback hell 
data(123, () => {
    data(456, () => {
        data(789, () => {
            data(963, () => {
                data(207);
            })
        })
    })
});
// data(1)