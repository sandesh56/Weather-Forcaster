import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY ="2164646fvsdfdfdsf56asdfsdf65651";

export default function login(req: NextApiRequest, res: NextApiResponse) {

	if(!req.body) {

        res.statusCode = 401;
        res.end('error');
    }
    console.log(req.body)
    const {username, password}  =  JSON.parse(req.body);
    console.log(username)

    res.json({
        token : jwt.sign(
            {
                username,
                admin : username ==='admin' && password === 'admin'
            }, KEY
            )
            
    })
}
