let reviews = [
    {
        _restaurantId: "one", _firstName: "John1", _lastName:"Doe1", _restaurantAddress:"12345",  _restaurantName:"MTR",_review:"Good"
    },
    {
        _restaurantId: "two" , _firstName: "John1", _lastName:"Doe1", _restaurantAddress:"12345", _restaurantName:"MTR",_review:"Good"
    }
];

exports.findAll = function(req, res) {
    res.json(Object.values(reviews));  
};

exports.findOne = function(req, res) {
    let customer = customers["customer" + req.params.id];
    res.json(reviews);
};

exports.add = function(req, res){
    reviews.push(req.body);
    res.json(reviews);

};