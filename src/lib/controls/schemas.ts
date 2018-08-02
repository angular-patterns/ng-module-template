export const groupOptionsSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "model": {
        "type": "string"
      },
      "widget": {
        "type": "object",
        "properties": {
          "component": {
            "type": "string"
          },
          "options": {
            "type": "object"
          }
        },
        "required": [
          "component",
          "options"
        ]
      }
    },
    "required": [
      "model",
      "widget"
    ]
  };

  export const labelOptionsSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "text": {
        "type": "string"
      }
    },
    "required": [
      "text"
    ]
  };

  export const tableOptionsSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "cols": {
        "type": "integer"
      },
      "rows": {
        "type": "integer"
      },
      "widgets": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "col": {
                "type": "integer"
              },
              "row": {
                "type": "integer"
              },
              "widget": {
                "type": ["object", null],
                "properties": {
                  "component": {
                    "type": "string"
                  },
                  "options": {
                    "type": "object"
                  }
                },
                "required": [
                  "component",
                  "options"
                ]
              }
            },
            "required": [
              "col",
              "row",
              "widget"
            ]
          }
        ]
      }
    },
    "required": [
      "cols",
      "rows",
      "widgets"
    ]
  };

  export const textboxOptionsSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "placeholder": {
        "type": "string"
      },
      "model": {
        "type": "string"
      },
      "defaultValue": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "placeholder",
      "model",
      "defaultValue"
    ]
  };