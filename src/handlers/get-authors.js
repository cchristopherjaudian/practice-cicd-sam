const logger = require('custom-logger');
logger('xxxxx', 'working....');
module.exports.handler = async () => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify([
                {
                    id: 'f4e9d5a0-6b5c-44d4-bc39-04f1b8a6f8e1',
                    name: 'Alice Johnson',
                    age: 34,
                    createdAt: '2024-08-09',
                },
                {
                    id: 'd3c7e3b9-d4a2-4b4b-95f5-1e3a3b36dfc8',
                    name: 'Bob Smith',
                    age: 27,
                    createdAt: '2024-08-08',
                },
                {
                    id: 'bf7e8b5b-b7f7-4d9b-b569-11d49f97a6d1',
                    name: 'Charlie Brown',
                    age: 45,
                    createdAt: '2024-08-07',
                },
                {
                    id: '8f4b9e0d-39e7-489c-8fd0-451d6d0e7bfb',
                    name: 'Diana Prince',
                    age: 32,
                    createdAt: '2024-08-06',
                },
                {
                    id: 'a6e6d6eb-0d42-44a6-9b8d-3b86362e9e91',
                    name: 'Edward Norton',
                    age: 29,
                    createdAt: '2024-08-05',
                },
            ]),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};
