const sequelize = require('./database/util');
sequelize.authenticate().then(()=>{console.log('Done')}).catch(
    (error)=>{
        console.log(error);

    });

    sequelize.sync()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);

    });
