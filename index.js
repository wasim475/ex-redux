const index=[
    {
        id: 1,
        value:0
    },
    {
        id: 2,
        value:0
    }
]

const myindex = {
    id:2,
    value : 5
}

const counterIndex = index.findIndex(c=>c.id===myindex.id)

console.log("counterIndex==>",counterIndex)
