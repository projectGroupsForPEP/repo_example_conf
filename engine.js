var { replace_content, nowEnv } = {
    replace_content: {
        dev: {
            api_prefix: '',
            routerPath: '/a/b'
        },
        test: {
            api_prefix: '//msinner.jr.jd.com',
            routerPath: '/a/b'
        },
        prod: {
            api_prefix: '//u.jr.jd.com',
            routerPath: '/a/b'
        }
    },
    nowEnv: 'dev'
}

function inject(a) {
    for (let i in replace_content[a])
    {
        Object.defineProperty(window, `LG_CONFIG_${i.toUpperCase()}`, {
            value: replace_content[a][i],
            writable: true
        })
    }
}

inject(nowEnv)







