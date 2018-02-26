define({ "api": [
  {
    "type": "post",
    "url": "/v1/json/classifier/create",
    "title": "POST - New Chunk of Data",
    "version": "1.0.0",
    "group": "Create_New_Chunk",
    "parameter": {
      "examples": [
        {
          "title": "x-www-form-urlencoded Input",
          "content": "   {\n\t\"hid\" : \"3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN\",\n\t\"chunk\": \"Demo Chunk Data test display\",\n\t\"has_space\": 0,\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message OF success</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Chunk Create error",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Create_New_Chunk",
    "name": "PostV1JsonClassifierCreate"
  },
  {
    "type": "get",
    "url": "/v1/json/classifier/all",
    "title": "GET - List all chunks",
    "version": "1.0.0",
    "group": "List_All_Data",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "List_All_Data",
    "name": "GetV1JsonClassifierAll",
    "sampleRequest": [
      {
        "url": "https://rds-training-api.appspot.com/v1/json/classifier/all"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/json/classifier/all",
    "title": "POST - List all chunks",
    "version": "1.0.0",
    "group": "List_All_Data",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "List_All_Data",
    "name": "PostV1JsonClassifierAll",
    "sampleRequest": [
      {
        "url": "https://rds-training-api.appspot.com/v1/json/classifier/all"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/json/classifier/hid/:chunkHid",
    "title": "DELETE - Chunk by hid",
    "version": "1.0.0",
    "group": "Operations_using_HID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of delete successfull</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.n",
            "description": "<p>Number of chunk deleted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ok",
            "description": "<p>Is Delete Request run successfully on Database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_HID",
    "name": "DeleteV1JsonClassifierHidChunkhid"
  },
  {
    "type": "get",
    "url": "/v1/json/classifier/hid/:chunkHid",
    "title": "GET - Chunk by hid",
    "version": "1.0.0",
    "group": "Operations_using_HID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_HID",
    "name": "GetV1JsonClassifierHidChunkhid"
  },
  {
    "type": "post",
    "url": "/v1/json/classifier/hid",
    "title": "POST - Read Chunk by hid",
    "version": "1.0.0",
    "group": "Operations_using_HID",
    "parameter": {
      "examples": [
        {
          "title": "x-www-form-urlencoded Input",
          "content": "   {\n\t\"hid\": \"3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_HID",
    "name": "PostV1JsonClassifierHid"
  },
  {
    "type": "put",
    "url": "/v1/json/classifier/hid/:chunkHid",
    "title": "PUT - Update Chunk data",
    "version": "1.0.0",
    "group": "Operations_using_HID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "x-www-form-urlencoded Input",
          "content": "   {\n\t\"hid\": \"3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN\",\n\t\"chunk\": \"Demo Chunk Data test display\",\n\t\"has_space\": 0,\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_HID",
    "name": "PutV1JsonClassifierHidChunkhid"
  },
  {
    "type": "delete",
    "url": "/v1/json/classifier/id/:chunkId",
    "title": "DELETE - Chunk by id",
    "version": "1.0.0",
    "group": "Operations_using_ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique HID of chunk</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of delete successfull</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.n",
            "description": "<p>Number of chunk deleted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ok",
            "description": "<p>Is Delete Request run successfully on Database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_ID",
    "name": "DeleteV1JsonClassifierIdChunkid"
  },
  {
    "type": "get",
    "url": "/v1/json/classifier/id/:chunkId",
    "title": "GET - Chunk by id",
    "version": "1.0.0",
    "group": "Operations_using_ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of chunk</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_ID",
    "name": "GetV1JsonClassifierIdChunkid"
  },
  {
    "type": "post",
    "url": "/v1/json/classifier/id",
    "title": "POST - Read Chunk by id",
    "version": "1.0.0",
    "group": "Operations_using_ID",
    "parameter": {
      "examples": [
        {
          "title": "x-www-form-urlencoded Input",
          "content": "   {\n\t\"id\": \"5a925bb92c8bcf5455832e6a\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_ID",
    "name": "PostV1JsonClassifierId"
  },
  {
    "type": "put",
    "url": "/v1/json/classifier/id/:chunkId",
    "title": "PUT - Update Chunk data",
    "version": "1.0.0",
    "group": "Operations_using_ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of chunk</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "x-www-form-urlencoded Input",
          "content": "   {\n\t\"hid\": \"3GV1I4SEO9CX1NTBXKN9TIFKTSQ6LN\",\n\t\"chunk\": \"Demo Chunk Data test display\",\n\t\"has_space\": 0,\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>Unique HID of chunk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chunk",
            "description": "<p>chunk of data</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "has_space",
            "description": "<p>Has Office Space</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"7d98-qAuTtBOu2UgtcfuPUACrkAwUgfk\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Operations_using_ID",
    "name": "PutV1JsonClassifierIdChunkid"
  }
] });
