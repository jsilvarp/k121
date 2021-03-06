define({ "api": [
  {
    "type": "delete",
    "url": "/api/secret/:id",
    "title": "Delete a person",
    "version": "1.0.0",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Person's ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./api/secret/index.js",
    "groupTitle": "Secret",
    "name": "DeleteApiSecretId"
  },
  {
    "type": "get",
    "url": "/api/secret",
    "title": "Get all people",
    "version": "1.0.0",
    "group": "Secret",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secret",
            "description": "<p>People array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret._id",
            "description": "<p>Person ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret.name",
            "description": "<p>Person name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.email",
            "description": "<p>Person email</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.friend",
            "description": "<p>Person's secret friend</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"58e6ef7537ddf7e67c37f7e5\",\n  \"name\": \"João Paulo\",\n  \"email\": \"contato@joaopaulo.eti.br\",\n  \"friend\": \"Paiva\"\n}]",
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
    "filename": "./api/secret/index.js",
    "groupTitle": "Secret",
    "name": "GetApiSecret"
  },
  {
    "type": "get",
    "url": "/api/secret/draw",
    "title": "Draw people",
    "version": "1.0.0",
    "group": "Secret",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secret",
            "description": "<p>People array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret._id",
            "description": "<p>Person ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret.name",
            "description": "<p>Person name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.email",
            "description": "<p>Person email</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.friend",
            "description": "<p>Person's secret friend</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"58e6ef7537ddf7e67c37f7e5\",\n  \"name\": \"João Paulo\",\n  \"email\": \"contato@joaopaulo.eti.br\",\n  \"friend\": \"Paiva\"\n}]",
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
    "filename": "./api/secret/index.js",
    "groupTitle": "Secret",
    "name": "GetApiSecretDraw"
  },
  {
    "type": "get",
    "url": "/api/secret/:id",
    "title": "Get specific person",
    "version": "1.0.0",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Person's ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "secret",
            "description": "<p>Person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret._id",
            "description": "<p>Person ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret.name",
            "description": "<p>Person name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.email",
            "description": "<p>Person email</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.friend",
            "description": "<p>Person's secret friend</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58e6ef7537ddf7e67c37f7e5\",\n  \"name\": \"João Paulo\",\n  \"email\": \"contato@joaopaulo.eti.br\",\n  \"friend\": \"Paiva\"\n}",
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
    "filename": "./api/secret/index.js",
    "groupTitle": "Secret",
    "name": "GetApiSecretId"
  },
  {
    "type": "post",
    "url": "/api/secret/:id",
    "title": "Update a person",
    "version": "1.0.0",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Person's ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"João Paulo\",\n  \"email\": \"contato@joaopaulo.eti.br\",\n  \"friend\": \"Paiva\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./api/secret/index.js",
    "groupTitle": "Secret",
    "name": "PostApiSecretId"
  },
  {
    "type": "put",
    "url": "/api/secret",
    "title": "Insert a new person",
    "version": "1.0.0",
    "group": "Secret",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"João Paulo\",\n  \"email\": \"contato@joaopaulo.eti.br\",\n  \"friend\": \"Paiva\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "secret",
            "description": "<p>Person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret._id",
            "description": "<p>Person ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret.name",
            "description": "<p>Person name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.email",
            "description": "<p>Person email</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "secret.friend",
            "description": "<p>Person's secret friend</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"58e6ef7537ddf7e67c37f7e5\",\n  \"name\": \"João Paulo\",\n  \"email\": \"contato@joaopaulo.eti.br\",\n  \"friend\": \"Paiva\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./api/secret/index.js",
    "groupTitle": "Secret",
    "name": "PutApiSecret"
  }
] });
