// https://github.com/vuejs/vue-cli/blob/dev/docs/config.md

if(process.env.NODE_ENV === 'production'){
    module.exports = {
        baseUrl: `/${process.env.APP_SUB_PATH ? process.env.APP_SUB_PATH : ''}`
    };
}else{
    module.exports = {
        baseUrl: `/`
    };
}