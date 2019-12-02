'use strict';

if (!cache){
    var cache = require('./cache');
}

exports.handler = async (event, context) => {
    const banner = cache.Banner;
    const BannerToDB = cache.BannerToDB;

    let subject = event.subject;
    console.log(`Received ${subject}`);
    let sections = await banner.classSearch(subject);
    sections = BannerToDB(sections);
    try {
        await writeSections(sections);
    } catch (error) {
        console.log(`Did not successfully write all sections to database: ${error}`);
    }
}

async function writeSections(sections){
    const docClient = cache.DocumentClient;
    let requests = sections.map(section => {
        return {
            'PutRequest': {
                'Item': section
            }
        }
    });
    let arrs = [];
    while(requests.length > 0){
        arrs.push(requests.splice(0, 25));
    }
    let pendingWrites = arrs.map(arr => {
        return {
            'RequestItems': {
                [process.env.TABLENAME]: arr
            }
        }
    });

    return Promise.all(pendingWrites.map(params => docClient.batchWrite(params).promise()));
}