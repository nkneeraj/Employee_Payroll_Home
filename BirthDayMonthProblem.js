function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var store_dates = new Map();

for(i=0;i<50;i++) {
    let date = randomDate(new Date(1992,0,1), new Date(1993,0,1));
    var month = date.getMonth() + 1;
    if(store_dates.has(month)){
        templist = store_dates.get(month);
        templist.push(i);
        store_dates.set(month,templist);
    } else {
        let list = new Array();
        list.push(i);
        store_dates.set(month, list)
    }
}

console.log(store_dates);