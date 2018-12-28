const path = require ('path')
module.exports = {
    entry : ['babel-polyfill','./src/index.js'],
    output : {
        path : path.resolve(__dirname,'public/scripts'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/, // to know what kind of files you want this rule to execute on it
                exclude : /node_modules/,  // to make sure this file will not be with us 
                //we want one rule which is use loader 
                use :  {
                    loader : 'babel-loader' ,
                    options : {
                        presets : ['env'] 
                    }
                }
            } 
        ]
    }, 
    
    devServer : {
        contentBase : path.resolve(__dirname,'public'),
        publicPath : '/scripts/'
    }
    , 
    devtool : "source-map" ,
}