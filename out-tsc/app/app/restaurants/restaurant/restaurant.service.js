var RestaurantService = (function () {
    function RestaurantService() {
        this.rests = [
            {
                id: 'bread-bakery',
                name: 'Bread & Bakery',
                category: 'Bakery',
                deliveryEstimate: '25m',
                rating: 4.9,
                imagePath: 'assets/img/restaurants/breadbakery.png'
            },
            {
                id: 'burger-house',
                name: 'Burger House',
                category: 'Hamburgers',
                deliveryEstimate: '100m',
                rating: 3.5,
                imagePath: 'assets/img/restaurants/burgerhouse.png'
            }
        ];
    }
    return RestaurantService;
}());
export { RestaurantService };
//# sourceMappingURL=restaurant.service.js.map