
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "stars-unit-definition",
    "description": "Specification for the unit definition of the stars player.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "stars-unit-definition@2.2",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Stars Player Unit Definition",
        "description": "Specification for the unit definition of the stars player.",
        "type": "object",
        "properties": {
          "id": {
            "const": "stars-unit-definition",
            "description": "Ensures that this is the right definition type",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "version": {
            "type": "string",
            "default": "1.5",
            "description": "Version to better support legacy definitions.",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "backgroundColor": {
            "type": "string",
            "description": "web-color",
            "examples": [
              "#ffaa56",
              "#ff1"
            ],
            "default": "#eeeeee",
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "ribbonBars": {
            "type": "boolean",
            "description": "If true, two striped bars are shown to indicate a special presentation mode.",
            "default": false,
            "x-parser-schema-id": "<anonymous-schema-4>"
          },
          "firstAudioOptions": {
            "description": "Options for the first audio to be played (can be openingImage-audio or mainAudio).",
            "type": "object",
            "properties": {
              "firstClickLayer": {
                "type": "boolean",
                "description": "If true, an overlapping click area covers all available space to catch first click to start audio.",
                "default": false,
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "animateButton": {
                "type": "boolean",
                "description": "If true, the audio trigger button is a bit moving to demand attention.",
                "default": false,
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-5>"
          },
          "continueButtonShow": {
            "type": "string",
            "description": "Rule if the navigation button to continue is presented",
            "enum": [
              "NO",
              "ALWAYS",
              "ON_MAIN_AUDIO_COMPLETE",
              "ON_VIDEO_COMPLETE",
              "ON_ANY_RESPONSE",
              "ON_AUDIO_AND_RESPONSE",
              "ON_RESPONSES_COMPLETE"
            ],
            "default": "ALWAYS",
            "x-parser-schema-id": "<anonymous-schema-8>"
          },
          "openingImage": {
            "description": "Centered (big) image to be presented before any interaction takes effect and before mainAudio.",
            "type": "object",
            "properties": {
              "audioSource": {
                "type": "string",
                "description": "Audio to be played before presentation of image; base64 coded string",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "imageSource": {
                "type": "string",
                "description": "Image base64-coded",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "presentationDurationMS": {
                "description": "Timespan/duration of presentation of the image in milliseconds",
                "type": "integer",
                "default": 1500,
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "required": [
              "imageSource"
            ],
            "additionalProperties": false,
            "x-parser-schema-id": "<anonymous-schema-9>"
          },
          "mainAudio": {
            "type": "object",
            "description": "Parameters and source for main audio sequence used via upper left button.",
            "properties": {
              "audioSource": {
                "type": "string",
                "description": "base64 coded string",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "maxPlay": {
                "type": "integer",
                "description": "Maximum number of plays. If '0', then no limit exists.",
                "default": 0,
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "disableInteractionUntilComplete": {
                "type": "boolean",
                "description": "If true, any interaction is disabled until the main audio has been played at least once. The continue button is not affected by this.",
                "default": false,
                "x-parser-schema-id": "<anonymous-schema-16>"
              }
            },
            "required": [
              "audioSource"
            ],
            "additionalProperties": false,
            "x-parser-schema-id": "<anonymous-schema-13>"
          },
          "interactionType": {
            "type": "string",
            "description": "Type of interaction",
            "enum": [
              "BUTTONS",
              "POLYGON_BUTTONS",
              "DROP",
              "WRITE",
              "FIND_ON_IMAGE",
              "VIDEO",
              "IMAGE_ONLY",
              "PLACE_VALUE"
            ],
            "x-parser-schema-id": "<anonymous-schema-17>"
          },
          "interactionMaxTimeMS": {
            "description": "After interaction start (after mainAudio and openingImage if given), the navigation to the next unit is forced when this milliseconds timespan is over.",
            "type": "integer",
            "default": 0,
            "x-parser-schema-id": "<anonymous-schema-18>"
          },
          "interactionParameters": {
            "description": "Every interaction type needs a different set of parameters.",
            "oneOf": [
              {
                "type": "object",
                "description": "These parameters will be used for interactionType DROP",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "DROP",
                    "x-parser-schema-id": "<anonymous-schema-21>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, placed at the bottom.",
                    "x-parser-schema-id": "<anonymous-schema-22>"
                  },
                  "imagePosition": {
                    "type": "string",
                    "description": "Position of the big main image.",
                    "enum": [
                      "TOP",
                      "BOTTOM"
                    ],
                    "default": "BOTTOM",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  },
                  "imageLandingXY": {
                    "type": "string",
                    "description": "Point on image where the selected button image will land (x,y - percentage of main image).",
                    "examples": [
                      "12,45",
                      "50,50"
                    ],
                    "default": "50,50",
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  },
                  "text": {
                    "type": "string",
                    "description": "If an image is given too, this text is used as alt.",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  },
                  "options": {
                    "type": "array",
                    "description": "Each option specifies one button.",
                    "items": {
                      "description": "Text, image or icon are valid defintions of one button",
                      "oneOf": [
                        {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": "string",
                              "description": "Will be cropped if not enough space is given.",
                              "x-parser-schema-id": "<anonymous-schema-29>"
                            }
                          },
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-28>"
                        },
                        {
                          "type": "object",
                          "properties": {
                            "imageSource": {
                              "type": "string",
                              "description": "Image base64-coded",
                              "x-parser-schema-id": "<anonymous-schema-31>"
                            },
                            "label": {
                              "type": "string",
                              "description": "Helps to identify the option if image can not be presented",
                              "x-parser-schema-id": "<anonymous-schema-32>"
                            },
                            "audioSource": {
                              "type": "string",
                              "description": "Audio base64-coded; if this property is set, an audio play button will be placed near the image to start the audio.",
                              "x-parser-schema-id": "<anonymous-schema-33>"
                            }
                          },
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-30>"
                        },
                        {
                          "type": "object",
                          "properties": {
                            "icon": {
                              "type": "string",
                              "description": "Icon provided by player",
                              "enum": [
                                "CHECK_GREEN",
                                "CLOSE_RED",
                                "CLAP_HANDS",
                                "SMILEY_1",
                                "SMILEY_2",
                                "SMILEY_3",
                                "SMILEY_4",
                                "SMILEY_5"
                              ],
                              "x-parser-schema-id": "<anonymous-schema-35>"
                            }
                          },
                          "additionalProperties": false,
                          "x-parser-schema-id": "<anonymous-schema-34>"
                        }
                      ],
                      "x-parser-schema-id": "<anonymous-schema-27>"
                    },
                    "minItems": 1,
                    "x-parser-schema-id": "<anonymous-schema-26>"
                  }
                },
                "required": [
                  "options"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType WRITE",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "WRITE",
                    "x-parser-schema-id": "<anonymous-schema-37>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, placed at the top.",
                    "x-parser-schema-id": "<anonymous-schema-38>"
                  },
                  "text": {
                    "type": "string",
                    "description": "If image is given too, this text is used as alt.",
                    "x-parser-schema-id": "<anonymous-schema-39>"
                  },
                  "keyboardMode": {
                    "type": "string",
                    "description": "Keyboard base layout",
                    "enum": [
                      "CHARACTERS",
                      "NUMBERS_LINE",
                      "NUMBERS_BLOCK"
                    ],
                    "default": "CHARACTERS",
                    "x-parser-schema-id": "<anonymous-schema-40>"
                  },
                  "addBackspaceKey": {
                    "type": "boolean",
                    "description": "If true, a backspace key is added to the keybboard.",
                    "default": true,
                    "x-parser-schema-id": "<anonymous-schema-41>"
                  },
                  "addUmlautKeys": {
                    "type": "boolean",
                    "description": "If true, keys for umlauts are added to the keyboard.",
                    "default": true,
                    "x-parser-schema-id": "<anonymous-schema-42>"
                  },
                  "keysToAdd": {
                    "type": "array",
                    "description": "All chars/strings in the list are added in a new key row at the bottom. Example: Graphemes",
                    "items": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-44>"
                    },
                    "examples": [
                      "eu",
                      "au",
                      "ei",
                      "ch",
                      "sch",
                      "ng"
                    ],
                    "default": [],
                    "x-parser-schema-id": "<anonymous-schema-43>"
                  },
                  "maxInputLength": {
                    "type": "integer",
                    "description": "Maximal number of characters for input.",
                    "default": 10,
                    "x-parser-schema-id": "<anonymous-schema-45>"
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType FIND_ON_IMAGE",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "FIND_ON_IMAGE",
                    "x-parser-schema-id": "<anonymous-schema-47>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, filling space as much as possible.",
                    "x-parser-schema-id": "<anonymous-schema-48>"
                  },
                  "text": {
                    "type": "string",
                    "description": "Placed below the image.",
                    "x-parser-schema-id": "<anonymous-schema-49>"
                  },
                  "size": {
                    "type": "string",
                    "description": "Size of circle to mark selected area. If options are given, this parameter works as default.",
                    "enum": [
                      "SMALL",
                      "MEDIUM",
                      "LARGE"
                    ],
                    "default": "MEDIUM",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  },
                  "showArea": {
                    "type": "string",
                    "description": "This parameter visualises an area of the image. The position and size of the area is specified as 'x,y-x,y'. Use this parameter to prepare the coding and remove it before the test.",
                    "x-parser-schema-id": "<anonymous-schema-51>"
                  }
                },
                "required": [
                  "imageSource"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-46>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType VIDEO",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object. The variable holds the play progress value as parts of 1.",
                    "default": "VIDEO",
                    "x-parser-schema-id": "<anonymous-schema-53>"
                  },
                  "videoSource": {
                    "type": "string",
                    "description": "Video base64-coded, filling space as much as possible.",
                    "x-parser-schema-id": "<anonymous-schema-54>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, used as placeholder before and after playing.",
                    "x-parser-schema-id": "<anonymous-schema-55>"
                  },
                  "text": {
                    "type": "string",
                    "description": "Placed below the video.",
                    "x-parser-schema-id": "<anonymous-schema-56>"
                  }
                },
                "required": [
                  "videoSource"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-52>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionTypes BUTTONS and IMAGE_ONLY",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "BUTTONS",
                    "x-parser-schema-id": "<anonymous-schema-58>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Stimulus image base64-coded.",
                    "x-parser-schema-id": "<anonymous-schema-59>"
                  },
                  "imagePosition": {
                    "type": "string",
                    "description": "DEPRECATED (Position of stimulus image)",
                    "enum": [
                      "TOP",
                      "LEFT"
                    ],
                    "default": "LEFT",
                    "x-parser-schema-id": "<anonymous-schema-60>"
                  },
                  "layout": {
                    "type": "string",
                    "description": "Position and alignment of text and image",
                    "enum": [
                      "TOP_CENTER",
                      "LEFT_CENTER",
                      "LEFT_CENTER_50",
                      "LEFT_BOTTOM"
                    ],
                    "default": "LEFT_CENTER",
                    "x-parser-schema-id": "<anonymous-schema-61>"
                  },
                  "imageUseFullArea": {
                    "type": "boolean",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-62>"
                  },
                  "text": {
                    "type": "string",
                    "description": "Stimulus text.",
                    "x-parser-schema-id": "<anonymous-schema-63>"
                  },
                  "buttonType": {
                    "type": "string",
                    "description": "Variant of button styling",
                    "enum": [
                      "BIG_SQUARE",
                      "MEDIUM_SQUARE",
                      "SMALL_SQUARE",
                      "TEXT",
                      "CIRCLE",
                      "EXTRA_LARGE_SQUARE",
                      "LONG_RECTANGLE",
                      "TALL_RECTANGLE"
                    ],
                    "default": "MEDIUM_SQUARE",
                    "x-parser-schema-id": "<anonymous-schema-64>"
                  },
                  "multiSelect": {
                    "type": "boolean",
                    "description": "If true, more than one option can be selected.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-65>"
                  },
                  "triggerNavigationOnSelect": {
                    "type": "boolean",
                    "description": "If true, the selection of any button triggers the navigation to the next unit (with short delay). No feedback is possible.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-66>"
                  },
                  "numberOfRows": {
                    "type": "integer",
                    "description": "The options are arranged in exact this number of rows regardless of the given space (no responsiveness). If an odd number of options is given, the upper row will contain of more options.",
                    "default": 1,
                    "x-parser-schema-id": "<anonymous-schema-67>"
                  },
                  "options": {
                    "oneOf": [
                      {
                        "type": "object",
                        "description": "List of buttons.",
                        "properties": {
                          "buttons": {
                            "type": "array",
                            "items": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0].properties.options.items",
                            "minItems": 1,
                            "x-parser-schema-id": "<anonymous-schema-70>"
                          }
                        },
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-69>"
                      },
                      {
                        "type": "object",
                        "description": "Repeat one button.",
                        "properties": {
                          "repeatButton": {
                            "type": "object",
                            "description": "Repeat one selection button several times",
                            "properties": {
                              "numberOfOptions": {
                                "type": "integer",
                                "description": "Number of options. Every option carries a growing number of hand clapping images.",
                                "default": 5,
                                "x-parser-schema-id": "<anonymous-schema-73>"
                              },
                              "option": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0].properties.options.items"
                            },
                            "additionalProperties": false,
                            "x-parser-schema-id": "<anonymous-schema-72>"
                          }
                        },
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-71>"
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-68>"
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-57>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType POLYGON_BUTTONS",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object. The variable holds the selected button(s).",
                    "default": "POLYGON_BUTTONS",
                    "x-parser-schema-id": "<anonymous-schema-75>"
                  },
                  "multiSelect": {
                    "type": "boolean",
                    "description": "If true, more than one option can be selected.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-76>"
                  },
                  "options": {
                    "type": "array",
                    "description": "Each option specifies one polygon as button.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "svgPath": {
                          "type": "string",
                          "description": "Path describing the polygon as svg element",
                          "examples": [
                            "M 70,340 l 75,-100 l 140,0 l -65,100 z",
                            "M 200,400 l 0,150 l 150,0 l 0,-150 z"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-79>"
                        },
                        "label": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-80>"
                        }
                      },
                      "required": [
                        "svgPath"
                      ],
                      "additionalProperties": false,
                      "x-parser-schema-id": "<anonymous-schema-78>"
                    },
                    "minItems": 1,
                    "x-parser-schema-id": "<anonymous-schema-77>"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "options"
                ],
                "x-parser-schema-id": "<anonymous-schema-74>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType PLACE_VALUE",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "PLACE_VALUE",
                    "x-parser-schema-id": "<anonymous-schema-82>"
                  },
                  "value": {
                    "type": "number",
                    "description": "Value to be placed above the target area. If '0' no number will be shown.",
                    "default": 0,
                    "x-parser-schema-id": "<anonymous-schema-83>"
                  },
                  "numberOfRows": {
                    "type": "number",
                    "description": "Defines the height of the target area.",
                    "default": 5,
                    "x-parser-schema-id": "<anonymous-schema-84>"
                  },
                  "maxNumberOfTens": {
                    "type": "number",
                    "description": "Maximum number of ten-bars offered to the testtaker.",
                    "default": 3,
                    "x-parser-schema-id": "<anonymous-schema-85>"
                  },
                  "maxNumberOfOnes": {
                    "type": "number",
                    "description": "Maximum number of one-chips offered to the testtaker.",
                    "default": 20,
                    "x-parser-schema-id": "<anonymous-schema-86>"
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-81>"
              }
            ],
            "x-parser-schema-id": "<anonymous-schema-19>"
          },
          "variableInfo": {
            "type": "array",
            "description": "Rules for coding and scoring the values",
            "items": {
              "type": "object",
              "properties": {
                "variableId": {
                  "type": "string",
                  "description": "Name of the variable to be coded.",
                  "x-parser-schema-id": "<anonymous-schema-89>"
                },
                "responseComplete": {
                  "type": "string",
                  "description": "Parameter to comply with Verona state changed notification",
                  "enum": [
                    "ALWAYS",
                    "ON_ANY_RESPONSE",
                    "ON_FULL_CREDIT"
                  ],
                  "default": "ALWAYS",
                  "x-parser-schema-id": "<anonymous-schema-90>"
                },
                "codingSource": {
                  "type": "string",
                  "description": "Where the value for evaluation comes from.",
                  "enum": [
                    "VALUE",
                    "VALUE_TO_UPPER",
                    "SUM",
                    "SUM_CHAR_MATCHES"
                  ],
                  "default": "VALUE",
                  "x-parser-schema-id": "<anonymous-schema-91>"
                },
                "codingSourceParameter": {
                  "type": "string",
                  "description": "Value to specify the source if needed",
                  "x-parser-schema-id": "<anonymous-schema-92>"
                },
                "codes": {
                  "type": "array",
                  "description": "First true code will be taken. If not code matches, code and score will be '0'. If the given code list includes code '0', the next available code will be taken.",
                  "items": {
                    "type": "object",
                    "description": "The first code matching the rule will be taken.",
                    "properties": {
                      "method": {
                        "type": "string",
                        "description": "Method to compare source with parameter",
                        "enum": [
                          "EQUALS",
                          "GREATER_THAN",
                          "LESS_THAN",
                          "IN_POSITION_RANGE"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-95>"
                      },
                      "parameter": {
                        "type": "string",
                        "description": "Value to compare with",
                        "x-parser-schema-id": "<anonymous-schema-96>"
                      },
                      "code": {
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-97>"
                      },
                      "score": {
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-98>"
                      }
                    },
                    "required": [
                      "method",
                      "parameter",
                      "code",
                      "score"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-94>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-93>"
                }
              },
              "required": [
                "variableId",
                "codes"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "audioFeedback": {
            "type": "object",
            "description": "",
            "properties": {
              "trigger": {
                "type": "string",
                "description": "Event triggering the evaluation of response(s) and playing feedback",
                "enum": [
                  "CONTINUE_BUTTON_CLICK",
                  "ANY_RESPONSE"
                ],
                "default": "CONTINUE_BUTTON_CLICK",
                "x-parser-schema-id": "<anonymous-schema-100>"
              },
              "feedback": {
                "type": "array",
                "description": "The feedback will be played for the variable just changed.",
                "items": {
                  "type": "object",
                  "properties": {
                    "variableId": {
                      "type": "string",
                      "description": "Name of the variable to trigger the feedback.",
                      "x-parser-schema-id": "<anonymous-schema-103>"
                    },
                    "source": {
                      "type": "string",
                      "description": "Where the value for evaluation comes from.",
                      "enum": [
                        "VALUE",
                        "CODE",
                        "SCORE"
                      ],
                      "default": "CODE",
                      "x-parser-schema-id": "<anonymous-schema-104>"
                    },
                    "method": {
                      "type": "string",
                      "description": "Method to compare value with parameter",
                      "enum": [
                        "EQUALS",
                        "GREATER_THAN",
                        "LESS_THAN"
                      ],
                      "default": "EQUALS",
                      "x-parser-schema-id": "<anonymous-schema-105>"
                    },
                    "parameter": {
                      "type": "string",
                      "description": "Value to compare with",
                      "x-parser-schema-id": "<anonymous-schema-106>"
                    },
                    "audioSource": {
                      "type": "string",
                      "description": "base64 coded string for audio sequence used via upper left button",
                      "x-parser-schema-id": "<anonymous-schema-107>"
                    }
                  },
                  "required": [
                    "variableId",
                    "parameter",
                    "audioSource"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-102>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-101>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-99>"
          }
        },
        "required": [
          "id",
          "interactionType"
        ],
        "additionalProperties": false,
        "definitions": {
          "option": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0].properties.options.items",
          "parametersButtons": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[4]",
          "parametersDrop": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0]",
          "parametersWrite": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[1]",
          "parametersFindOnImage": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[2]",
          "parametersVideo": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[3]",
          "parametersPolygonButtons": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[5]",
          "parametersPlaceValue": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[6]",
          "code": "$ref:$.components.schemas.metadata-values.properties.variableInfo.items.properties.codes.items",
          "coding": "$ref:$.components.schemas.metadata-values.properties.variableInfo.items",
          "audioFeedback": "$ref:$.components.schemas.metadata-values.properties.audioFeedback.properties.feedback.items"
        },
        "x-parser-schema-id": "stars-unit-definition@2.2"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  