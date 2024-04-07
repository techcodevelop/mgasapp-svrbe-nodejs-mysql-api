import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

const validateToken = (req: Request, res: Response, next: NextFunction) => {

    const headerToken = req.headers['authorization']

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {

        try {
            const bearerToken = headerToken.slice(7)
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'pepito123')

            console.log('secrte: '+ process.env.SECRET_KEY || 'pepito123' )
            next()
        } catch (e) {
            res.status(401).json({
                msg: 'Token no valido'
            })
        }

    } else {
        res.status(401).json({
            msg: 'Acceso denegado'
        })
    }

}

export default validateToken