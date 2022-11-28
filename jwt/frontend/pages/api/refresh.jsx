import nookies from 'nookies';

const REFRESH_TOKEN_NAME = 'REFRESH_TOKEN_NAME';

const controllers = {
    async storeRefreshToken(request, response) {
        console.log('handler', request.body);

        nookies.set(REFRESH_TOKEN_NAME, request.body.refresh_token, {
            httpOnly: true,
            sameSite: 'lax'
        })

        response.json({
            data: {
                message: 'Store with success'
            }
        });
    }
}

const controllerBy = {
    POST: controllers.storeRefreshToken
}

export default function handler(request, response) {
    if (controllerBy[request.method]) return controllerBy[request.method](request, response)

    response.status(404).json({
        status: 404,
        message: 'Not found'
    })
}