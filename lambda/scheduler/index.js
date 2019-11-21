
if (!cache){
    var cache = require('./cache');
}

exports.handler = async (event, context) => {
    let DBToScheduler = cache.DBToScheduler;
    let SchedulerToUI = cache.SchedulerToUI;
    let scheduler = cache.Scheduler;

    let params = JSON.parse(event.body);
    let courseList = params.courses;
    console.log(`Received the following courses: ${courseList}`);

    let data = await getSections(courseList);
    let courses = DBToScheduler(data);
    let schedules = scheduler.createSchedules(courses);
    let results = SchedulerToUI(schedules);
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
    let docClient = cache.DocumentClient;
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
            return docClient.query(params).promise();
        } catch (error) {
            console.log({
                'Error': error,
                'Course': course,
                'Params': params
            });
        }
    }));
}

