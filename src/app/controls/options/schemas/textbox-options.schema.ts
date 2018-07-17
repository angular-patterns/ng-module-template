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