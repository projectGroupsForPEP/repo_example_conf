// new URL is exist compatibility problems
/**
 * To parse url
 * @param {string} url An url needed to be parsed
 */
const urlParsing = (url) => {
    const urlParseRE = /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/
    const matches = urlParseRE.exec(url || "") || []

    return {
        href: matches[0] || "",
        hrefNoHash: matches[1] || "",
        hrefNoSearch: matches[2] || "",
        domain: matches[3] || "",
        protocol: matches[4] || "",
        doubleSlash: matches[5] || "",
        authority: matches[6] || "",
        username: matches[8] || "",
        password: matches[9] || "",
        host: matches[10] || "",
        hostname: matches[11] || "",
        port: matches[12] || "",
        pathname: matches[13] || "",
        directory: matches[14] || "",
        filename: matches[15] || "",
        search: matches[16] || "",
        hash: matches[17] || ""
    }
}
/**
 * If page position in bottom return true
 * @param {number} offset advance
 */
const isReachPageBottom = (offset = 0) => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    const scrollHeight = Math.max(document.documentElement.scrollHeight || 0, document.body.scrollHeight || 0)
    return scrollHeight <= scrollTop + clientHeight + offset
}
/**
 * @param {function} func 
 * @param {number} delay 
 */
const debounce = (func, delay) => {
    var debounceTimer
    return (...args) => {
        const ctx = this
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
            func.call(ctx, ...args)
        }, delay)
    }
}   
/**
 * @param {function} func 
 * @param {number} interval 
 */
const stable = (func, interval) => {
    var stableTimer
    var startTime = new Date()
    return (...args) => {
        const nowInterval = new Date() - startTime
        const ctx = this
        clearTimeout(stableTimer)
        if (nowInterval >= interval)
        {
            func.call(ctx, ...args)
            startTime = new Date()
        }else{
            stableTimer = setTimeout(() => {
                func.call(ctx, ...args)
            }, interval)
        }
    }
}
export {
    urlParsing,
    isReachPageBottom,
    debounce,
    stable
}