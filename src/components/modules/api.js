import $ from 'webpack-zepto'
/**
 * @param {string} url request url path
 * @param {object = ''} data request data
 * @param {string = GET} type request type
 */
const request = (url, data = "", type = "GET") => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type,
            url,
            // for application json data
            data: JSON.stringify(data),
            contentType: 'application/json;charset=UTF-8',
            success(params) {
                resolve(params)
            },
            error(xhr, type) {
                reject({
                    xhr,
                    type
                })
            }
        })
    })
}
export {
    request
}