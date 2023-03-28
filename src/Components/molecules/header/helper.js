export function calculateCartItems(cards){
    const cartCount=cards.reduce(addCount,0);
    const cartPrice=cards.reduce(addPrice,0);
    return [cartPrice,cartCount]
}

function addCount(total,element){
    if(element.count>0){
        return total+=Number(element.count);
    }
    return total;
}
function addPrice(total,element){
    if(element.count>0){
        return total+=Number(element.count)*Number(element.newPrice);
    }
    return total;
}