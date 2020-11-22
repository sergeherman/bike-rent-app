exports.getPosts = (req, res)=> {
    res.json({
        bike_types:[
            {type: "Bike type 1"}, 
            {type: "Bike type 2"} 
        ],
        bike_names:[
            {name: "Bike name 1"}, 
            {name: "Bike name 2"}  
        ]
    });
};