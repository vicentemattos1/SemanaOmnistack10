const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request,response) {
        const {latitude, longitude, techs} = request.query;

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:  {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    }
                },
                $maxDistance: 10000,
            }
        });

        const techsArray = parseStringAsArray(techs);
    }
}