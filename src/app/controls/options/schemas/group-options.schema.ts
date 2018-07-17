export const groupOptionsSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "name": {
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
      "name",
      "widget"
    ]
  };