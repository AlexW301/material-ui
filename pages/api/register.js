import data from '../../data'
var fs = require('fs');

const register = async (req, res) => {
    if(req.method === 'POST' ) {
        res.status(200).json('success')
        data.push({name: req.body})
        console.log(data)
    }
}

export default register;