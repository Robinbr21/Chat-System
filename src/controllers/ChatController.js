const db = require('../models')
const { Op, Sequelize, QueryTypes } = require('sequelize')

const path = require('path');

exports.index =async (req,res) => {
    // console.log("inside chatController");
    //db test
    // let Query = `select * from infinite_demo_users where table_prefix = 7757`
    // const custTimeAtWork = await db.sequelize.query(Query, {
    //     type: QueryTypes.SELECT,
    //     raw: true
    // })
    // console.log("===>>>>>",custTimeAtWork[0].user_name);

    return res.sendFile(path.join(__dirname , '../view/chat.html'));
}
