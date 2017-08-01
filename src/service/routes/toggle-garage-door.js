let routerController = require('./index');

class toggleGarageDoor {
    
    constructor(){
        console.log(routerController);
        this.toggleGarageDoor();
    }

    toggleGarageDoor(){
        router.post('/rest/toggleGarageDoor', function (req, res, next) {
            res.status(200).json({
                "Hello World": true
            });
        });
    }
}

new toggleGarageDoor();



// // POST /toggleGarageDoor
// router.post('/rest/toggleGarageDoor', function (req, res, next) {
//     res.status(200).json({
//         "Hello World": true
//     });
// });