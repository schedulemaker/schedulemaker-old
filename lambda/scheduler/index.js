var Scheduler = require('scheduler');
var conversions = require('conversions');

if (!cache){
    var cache = require('./cache');
}

exports.handler = async (event, context) => {
    let params = JSON.parse(event.body);
    let courseList = params.courses;
    console.log(`Received the following courses: ${courseList}`);
    let data = await getSections(courseList);
    let courses = conversions.DBToScheduler.convert(data);
    let scheduler = new Scheduler();
    let schedules = scheduler.createSchedules(courses);
    let results = conversions.SchedulerToUI.convert(schedules);
    console.log(`Created ${results.length} schedules`);
    return {
        statusCode: '200',
        body: JSON.stringify(results),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        }
    }
};

async function getSections(courses){
    return Promise.all(courses.map(async course => {
        let params = {
            TableName : process.env.TABLENAME,
            KeyConditionExpression : "#courseName = :course",
            ExpressionAttributeNames : {
                "#courseName" : "courseName"
            },
            ExpressionAttributeValues : {
                ":course" : course
                
            }
        };

        try {
            return cache.DocumentClient.query(params).promise();
        } catch (error) {
            console.log(`Error retrieving sections for ${course}: ${error} Params: ${params}`);
        }
    }));
}

