const map = new WeakMap();

const internal = function internal(object) {
    if (!map.has(object)) map.set(object, {});
    return map.get(object);
}

class garageService {
    constructor ($http, userService) {
        internal(this).garages = [];
        internal(this).userService = userService;
    }

    getGarages () {
        return internal(this).garages;
    }

    restGetGarages () {

    }

    restSaveGarages () {

    }

}

garageService.id = 'garageService';
garageService.$inject = ['$http', 'userService'];

export default garageService;