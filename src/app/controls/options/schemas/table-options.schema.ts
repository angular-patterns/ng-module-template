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
}