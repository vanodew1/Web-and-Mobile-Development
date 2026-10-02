//convert the above to cart items
export function CartItemList() {
    const cartItems = [
        {id:1,name:'Nike Air Max',price:129.99},
        {id:2,name:'Adidas Ultraboost',price:179.99},
        {id:3,name:'Reebok Classic',price:89.99}
    ];

    return (
        <ul>
            {cartItems.map(item =>
                <li key={item.id}>
                    {item.name} - ${item.price.toFixed(2)}
                </li>
            )}
        </ul>
    );
}