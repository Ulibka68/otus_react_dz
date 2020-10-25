const { Sequelize } = require('sequelize');

// option examples
const sequelize = new Sequelize('todolist', 'root', 'root', {
    // the sql dialect of the database
    // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
    dialect: 'mysql',

    // custom host; default: localhost
    host: 'localhost',

    // custom port; default: dialect default
    // port: 12345,

    // disable logging or provide a custom logging function; default: console.log
    // logging: false,
    logging: console.log,

    // Specify options, which are used when sequelize.define is called.
    // The following example:
    //   define: { timestamps: false }
    // is basically the same as:
    //   Model.init(attributes, { timestamps: false });
    //   sequelize.define(name, attributes, { timestamps: false });
    // so defining the timestamps for each model will be not necessary
    define: {
        // underscored: false,
        // freezeTableName: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: false
    },

    // similar for sync: you can define this to always force sync for models
    sync: { force: true },
});

async function testconnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    sequelize.close();
}

testconnection();