/**
 * @api {get} /v1/json/classifier/all GET - List all chunks
 * @apiVersion 1.0.0
 * @apiGroup List_All_Data
 * @apiSuccess {String} _id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * Connection: keep-alive
 *
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {post} /v1/json/classifier/all  POST - List all chunks
 * @apiVersion 1.0.0
 * @apiGroup List_All_Data
 * @apiSuccess {String} _id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {post} /v1/json/classifier/create POST - New Chunk of Data
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Create New Chunk
 * @apiParamExample x-www-form-urlencoded Input
 *    {
 *	"hid" : "3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN",
 *	"chunk": "Demo Chunk Data test display",
 *	"has_space": 0,
 *    }
 *
 * @apiSuccess {String} message Message OF success
 * @apiSuccess {String} _id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json} Chunk Create error
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {post} /v1/json/classifier/id POST - Read Chunk by id
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using ID
 * @apiParamExample x-www-form-urlencoded Input
 *    {
 *	"id": "5a925bb92c8bcf5455832e6a"
 *    }
 * @apiSuccess {String} id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {get} /v1/json/classifier/id/:chunkId GET - Chunk by id
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using ID
 * @apiParam {String} id Unique id of chunk
 * @apiSuccess {String} id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {put} /v1/json/classifier/id/:chunkId PUT - Update Chunk data
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using ID
 * @apiParam {String} id Unique Id of chunk
 * @apiParamExample x-www-form-urlencoded Input
 *    {
 *	"hid": "3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN",
 *	"chunk": "Demo Chunk Data test display",
 *	"has_space": 0,
 *    }
 * @apiSuccess {String} _id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /v1/json/classifier/id/:chunkId DELETE - Chunk by id
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using ID
 * @apiParam {String} id Unique HID of chunk
 *
 * @apiSuccess {String} message Message of delete successfull
 * @apiSuccess {String} data.n  Number of chunk deleted
 * @apiSuccess {String} data.ok Is Delete Request run successfully on Database
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {post} /v1/json/classifier/hid POST - Read Chunk by hid
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using HID
 * @apiParamExample x-www-form-urlencoded Input
 *    {
 *	"hid": "3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN"
 *    }
 * @apiSuccess {String} _id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {get} /v1/json/classifier/hid/:chunkHid GET - Chunk by hid
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using HID
 * @apiParam {String} hid Unique HID of chunk
 * @apiSuccess {String} _id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {put} /v1/json/classifier/hid/:chunkHid PUT - Update Chunk data
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using HID
 * @apiParam {String} hid Unique HID of chunk
 * @apiParamExample x-www-form-urlencoded Input
 *    {
 *	"hid": "3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN",
 *	"chunk": "Demo Chunk Data test display",
 *	"has_space": 0,
 *    }
 * @apiSuccess {String} _id Unique ID of chunk
 * @apiSuccess {String} hid Unique HID of chunk
 * @apiSuccess {String} chunk chunk of data
 * @apiSuccess {Number} has_space Has Office Space
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {delete} /v1/json/classifier/hid/:chunkHid DELETE - Chunk by hid
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Operations using HID
 * @apiParam {String} hid Unique HID of chunk
 *
 * @apiSuccess {String} message Message of delete successfull
 * @apiSuccess {String} data.n  Number of chunk deleted
 * @apiSuccess {String} data.ok Is Delete Request run successfully on Database
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */
