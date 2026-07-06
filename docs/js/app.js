
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
        "$id": "stars-unit-definition@5.4",
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
            "default": "5.0",
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
                "type": "string",
                "description": "Overlapping click area covering all available space to catch first click to start audio",
                "enum": [
                  "OFF",
                  "TRANSPARENT",
                  "BLUR",
                  "DISABLED"
                ],
                "default": "OFF",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "animateButton": {
                "type": "string",
                "description": "Audio trigger button animation to catch attention.",
                "enum": [
                  "OFF",
                  "KIND",
                  "BOLD"
                ],
                "default": "BOLD",
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
              "PLACE_VALUE",
              "NUMBER_LINE",
              "PYRAMID",
              "EQUATION",
              "META_BUTTONS"
            ],
            "x-parser-schema-id": "<anonymous-schema-17>"
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
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, placed at the bottom.",
                    "x-parser-schema-id": "<anonymous-schema-21>"
                  },
                  "imagePosition": {
                    "type": "string",
                    "description": "Position of the big main image.",
                    "enum": [
                      "TOP",
                      "BOTTOM"
                    ],
                    "default": "BOTTOM",
                    "x-parser-schema-id": "<anonymous-schema-22>"
                  },
                  "imageLandingXY": {
                    "type": "string",
                    "description": "Point on image where the selected button image will land (x,y - percentage of main image).",
                    "examples": [
                      "12,45",
                      "50,50"
                    ],
                    "default": "50,50",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  },
                  "text": {
                    "type": "string",
                    "description": "If an image is given too, this text is used as alt.",
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  },
                  "buttonType": {
                    "type": "string",
                    "description": "Variant of button styling",
                    "enum": [
                      "EXTRA_SMALL_SQUARE",
                      "SMALL_SQUARE"
                    ],
                    "default": "SMALL_SQUARE",
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
                "x-parser-schema-id": "<anonymous-schema-19>"
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
                      "NUMBERS_LINE"
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
                  "keysLine1": {
                    "type": "array",
                    "description": "",
                    "items": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-43>"
                    },
                    "default": [
                      "a",
                      "b",
                      "c",
                      "d",
                      "e",
                      "f",
                      "g",
                      "h",
                      "i"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-42>"
                  },
                  "keysLine2": {
                    "type": "array",
                    "description": "",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-45>"
                    },
                    "default": [
                      "j",
                      "k",
                      "l",
                      "m",
                      "n",
                      "o",
                      "p",
                      "q",
                      "r"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-44>"
                  },
                  "keysLine3": {
                    "type": "array",
                    "description": "",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-47>"
                    },
                    "default": [
                      "s",
                      "t",
                      "u",
                      "v",
                      "w",
                      "x",
                      "y",
                      "z"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-46>"
                  },
                  "keysLine4": {
                    "type": "array",
                    "description": "",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-49>"
                    },
                    "default": [],
                    "examples": [
                      "ä",
                      "ö",
                      "ü",
                      "eu",
                      "au",
                      "ei",
                      "ch",
                      "sch",
                      "ng"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-48>"
                  },
                  "maxInputLength": {
                    "type": "integer",
                    "description": "Maximal number of characters for input.",
                    "default": 10,
                    "x-parser-schema-id": "<anonymous-schema-50>"
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
                    "x-parser-schema-id": "<anonymous-schema-52>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, filling space as much as possible.",
                    "x-parser-schema-id": "<anonymous-schema-53>"
                  },
                  "text": {
                    "type": "string",
                    "description": "Placed below the image.",
                    "x-parser-schema-id": "<anonymous-schema-54>"
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
                    "x-parser-schema-id": "<anonymous-schema-55>"
                  },
                  "showArea": {
                    "type": "string",
                    "description": "This parameter visualises an area of the image. The position and size of the area is specified as 'x,y-x,y'. Use this parameter to prepare the coding and remove it before the test.",
                    "x-parser-schema-id": "<anonymous-schema-56>"
                  }
                },
                "required": [
                  "imageSource"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-51>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType VIDEO",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object. The variable holds the play progress value as parts of 1.",
                    "default": "VIDEO",
                    "x-parser-schema-id": "<anonymous-schema-58>"
                  },
                  "videoSource": {
                    "type": "string",
                    "description": "Video base64-coded, filling space as much as possible.",
                    "x-parser-schema-id": "<anonymous-schema-59>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, used as placeholder before and after playing.",
                    "x-parser-schema-id": "<anonymous-schema-60>"
                  },
                  "text": {
                    "type": "string",
                    "description": "Placed below the video.",
                    "x-parser-schema-id": "<anonymous-schema-61>"
                  },
                  "triggerNavigationOnEnd": {
                    "type": "boolean",
                    "description": "If true, after finishing video the player will send a unit navigation request to the host.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-62>"
                  }
                },
                "required": [
                  "videoSource"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-57>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionTypes BUTTONS and IMAGE_ONLY",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "BUTTONS",
                    "x-parser-schema-id": "<anonymous-schema-64>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Stimulus image base64-coded.",
                    "x-parser-schema-id": "<anonymous-schema-65>"
                  },
                  "imagePosition": {
                    "type": "string",
                    "description": "DEPRECATED (Position of stimulus image)",
                    "enum": [
                      "TOP",
                      "LEFT"
                    ],
                    "default": "LEFT",
                    "x-parser-schema-id": "<anonymous-schema-66>"
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
                    "x-parser-schema-id": "<anonymous-schema-67>"
                  },
                  "imageUseFullArea": {
                    "type": "boolean",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-68>"
                  },
                  "text": {
                    "type": "string",
                    "description": "Stimulus text.",
                    "x-parser-schema-id": "<anonymous-schema-69>"
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
                      "EXTRA_SMALL_SQUARE",
                      "LONG_RECTANGLE",
                      "TALL_RECTANGLE"
                    ],
                    "default": "MEDIUM_SQUARE",
                    "x-parser-schema-id": "<anonymous-schema-70>"
                  },
                  "multiSelect": {
                    "type": "boolean",
                    "description": "If true, more than one option can be selected.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-71>"
                  },
                  "triggerNavigationOnSelect": {
                    "type": "boolean",
                    "description": "If true, the selection of any button triggers the navigation to the next unit (with short delay). No feedback is possible.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-72>"
                  },
                  "numberOfRows": {
                    "type": "integer",
                    "description": "The options are arranged in exact this number of rows regardless of the given space (no responsiveness). If an odd number of options is given, the upper row will contain of more options.",
                    "default": 1,
                    "x-parser-schema-id": "<anonymous-schema-73>"
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
                            "x-parser-schema-id": "<anonymous-schema-76>"
                          }
                        },
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-75>"
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
                                "x-parser-schema-id": "<anonymous-schema-79>"
                              },
                              "option": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0].properties.options.items"
                            },
                            "additionalProperties": false,
                            "x-parser-schema-id": "<anonymous-schema-78>"
                          }
                        },
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-77>"
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-74>"
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-63>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType POLYGON_BUTTONS",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object. The variable holds the selected button(s).",
                    "default": "POLYGON_BUTTONS",
                    "x-parser-schema-id": "<anonymous-schema-81>"
                  },
                  "multiSelect": {
                    "type": "boolean",
                    "description": "If true, more than one option can be selected.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-82>"
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
                          "x-parser-schema-id": "<anonymous-schema-85>"
                        },
                        "label": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-86>"
                        }
                      },
                      "required": [
                        "svgPath"
                      ],
                      "additionalProperties": false,
                      "x-parser-schema-id": "<anonymous-schema-84>"
                    },
                    "minItems": 1,
                    "x-parser-schema-id": "<anonymous-schema-83>"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "options"
                ],
                "x-parser-schema-id": "<anonymous-schema-80>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType PLACE_VALUE",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "PLACE_VALUE",
                    "x-parser-schema-id": "<anonymous-schema-88>"
                  },
                  "value": {
                    "type": "number",
                    "description": "Value to be placed above the target area. If '0' no number will be shown.",
                    "default": 0,
                    "x-parser-schema-id": "<anonymous-schema-89>"
                  },
                  "maxNumberOfTens": {
                    "type": "number",
                    "description": "Maximum number of ten-bars offered to the testtaker.",
                    "default": 3,
                    "x-parser-schema-id": "<anonymous-schema-90>"
                  },
                  "maxNumberOfOnes": {
                    "type": "number",
                    "description": "Maximum number of one-chips offered to the testtaker.",
                    "default": 20,
                    "x-parser-schema-id": "<anonymous-schema-91>"
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-87>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType NUMBER_LINE",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "NUMBER_LINE",
                    "x-parser-schema-id": "<anonymous-schema-93>"
                  },
                  "style": {
                    "type": "string",
                    "description": "Graphical style to show the numbers.",
                    "enum": [
                      "WAVE",
                      "RULER",
                      "BLOCK"
                    ],
                    "default": "WAVE",
                    "x-parser-schema-id": "<anonymous-schema-94>"
                  },
                  "firstNumber": {
                    "type": "number",
                    "description": "Defines the beginning number of the line.",
                    "default": 0,
                    "x-parser-schema-id": "<anonymous-schema-95>"
                  },
                  "leadingNumbers": {
                    "description": "Instead of 'firstNumber', all numbers before the input field can be given.",
                    "type": "array",
                    "items": {
                      "type": "number",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-97>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-96>"
                  },
                  "lastNumber": {
                    "type": "number",
                    "description": "Defines the end of the line.",
                    "default": 20,
                    "x-parser-schema-id": "<anonymous-schema-98>"
                  },
                  "trailingNumbers": {
                    "description": "Instead of 'lastNumber', all numbers after the input field can be given.",
                    "type": "array",
                    "items": {
                      "type": "number",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-100>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-99>"
                  },
                  "numberInput": {
                    "type": "number",
                    "description": "If 'firstNumber' and 'lastNumber' are given, this number sets the value to be changed by testee.",
                    "default": 10,
                    "x-parser-schema-id": "<anonymous-schema-101>"
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-92>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType PYRAMID",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "PYRAMID",
                    "x-parser-schema-id": "<anonymous-schema-103>"
                  },
                  "example": {
                    "type": "object",
                    "description": "If given, left hand a pyramid of these numbers will be placed as an example.",
                    "properties": {
                      "topNumber": {
                        "type": "number",
                        "description": "Placed on top.",
                        "x-parser-schema-id": "<anonymous-schema-105>"
                      },
                      "bottomLeftNumber": {
                        "type": "number",
                        "description": "Placed on bottom left.",
                        "x-parser-schema-id": "<anonymous-schema-106>"
                      },
                      "bottomRightNumber": {
                        "type": "number",
                        "description": "Placed on bottom right.",
                        "x-parser-schema-id": "<anonymous-schema-107>"
                      }
                    },
                    "required": [
                      "topNumber",
                      "bottomLeftNumber",
                      "bottomRightNumber"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-104>"
                  },
                  "topNumber": {
                    "type": "number",
                    "description": "Placed on top.",
                    "x-parser-schema-id": "<anonymous-schema-108>"
                  }
                },
                "required": [
                  "topNumber"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-102>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType EQUATION",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "EQUATION",
                    "x-parser-schema-id": "<anonymous-schema-110>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded; placed above the equation.",
                    "x-parser-schema-id": "<anonymous-schema-111>"
                  },
                  "fixOperand1": {
                    "type": "number",
                    "description": "If given, the first operand will be fixed and not an input.",
                    "x-parser-schema-id": "<anonymous-schema-112>"
                  },
                  "operators": {
                    "type": "array",
                    "description": "If only one operator is given, this operator will be fixed and not an input.",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-114>"
                    },
                    "examples": [
                      [
                        "+",
                        "-"
                      ],
                      [
                        "+",
                        "-",
                        "*"
                      ]
                    ],
                    "minItems": 1,
                    "x-parser-schema-id": "<anonymous-schema-113>"
                  },
                  "fixOperand2": {
                    "type": "number",
                    "description": "If given, the second operand will be fixed and not an input.",
                    "x-parser-schema-id": "<anonymous-schema-115>"
                  },
                  "fixResult": {
                    "type": "number",
                    "description": "If given, the equation result will be fixed and not an input.",
                    "x-parser-schema-id": "<anonymous-schema-116>"
                  }
                },
                "required": [
                  "operators"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-109>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType META_BUTTONS",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "META",
                    "x-parser-schema-id": "<anonymous-schema-118>"
                  }
                },
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-117>"
              }
            ],
            "x-parser-schema-id": "<anonymous-schema-18>"
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
                  "x-parser-schema-id": "<anonymous-schema-121>"
                },
                "responseComplete": {
                  "type": "string",
                  "description": "Parameter to comply with Verona state changed notification",
                  "enum": [
                    "ALWAYS",
                    "ON_ANY_RESPONSE",
                    "ON_FULL_CREDIT",
                    "ON_ALL_SUB_VALUES"
                  ],
                  "default": "ALWAYS",
                  "x-parser-schema-id": "<anonymous-schema-122>"
                },
                "codingSource": {
                  "type": "string",
                  "description": "Where the value for evaluation comes from.",
                  "enum": [
                    "VALUE",
                    "VALUE_TO_UPPER",
                    "SUM",
                    "SUM_CHAR_MATCHES",
                    "REGEX_FRACTION"
                  ],
                  "default": "VALUE",
                  "x-parser-schema-id": "<anonymous-schema-123>"
                },
                "codingSourceParameter": {
                  "type": "string",
                  "description": "Value to specify the source if needed",
                  "x-parser-schema-id": "<anonymous-schema-124>"
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
                          "IN_POSITION_RANGE",
                          "REGEX_MATCH"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-127>"
                      },
                      "parameter": {
                        "type": "string",
                        "description": "Value to compare with",
                        "x-parser-schema-id": "<anonymous-schema-128>"
                      },
                      "code": {
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-129>"
                      },
                      "score": {
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-130>"
                      }
                    },
                    "required": [
                      "method",
                      "parameter",
                      "code",
                      "score"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-126>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-125>"
                }
              },
              "required": [
                "variableId",
                "codes"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-120>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-119>"
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
                "x-parser-schema-id": "<anonymous-schema-132>"
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
                      "x-parser-schema-id": "<anonymous-schema-135>"
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
                      "x-parser-schema-id": "<anonymous-schema-136>"
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
                      "x-parser-schema-id": "<anonymous-schema-137>"
                    },
                    "parameter": {
                      "type": "string",
                      "description": "Value to compare with",
                      "x-parser-schema-id": "<anonymous-schema-138>"
                    },
                    "audioSource": {
                      "type": "string",
                      "description": "base64 coded string for audio sequence used via upper left button",
                      "x-parser-schema-id": "<anonymous-schema-139>"
                    },
                    "showResponse": {
                      "description": "Highlight a button, write a value etc. to illustrate the audio message.",
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "variableId": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-142>"
                          },
                          "value": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-143>"
                          },
                          "delayMS": {
                            "description": "Milliseconds from audio start to set the response",
                            "type": "integer",
                            "default": 0,
                            "x-parser-schema-id": "<anonymous-schema-144>"
                          }
                        },
                        "required": [
                          "variableId",
                          "value"
                        ],
                        "additionalProperties": false,
                        "x-parser-schema-id": "<anonymous-schema-141>"
                      },
                      "x-parser-schema-id": "<anonymous-schema-140>"
                    }
                  },
                  "required": [
                    "variableId",
                    "parameter",
                    "audioSource"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-134>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-133>"
              },
              "triggerNavigationOnEnd": {
                "type": "boolean",
                "description": "If true, after finishing audio the player will send a unit navigation request to the host.",
                "default": false,
                "x-parser-schema-id": "<anonymous-schema-145>"
              }
            },
            "required": [
              "feedback"
            ],
            "additionalProperties": false,
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "closingMetaButtons": {
            "type": "object",
            "description": "If given, four meta buttons are presented as last interaction.",
            "properties": {
              "audioSource": {
                "type": "string",
                "description": "base64 coded string; if given, the main audio button will be visible and triggers the audio",
                "x-parser-schema-id": "<anonymous-schema-147>"
              },
              "autoPlay": {
                "type": "boolean",
                "description": "If true, the given audio will be played when the closing interaction starts. If false, only the click on the main audio button will start the audio.",
                "default": true,
                "x-parser-schema-id": "<anonymous-schema-148>"
              },
              "variableIdMetaSelection": {
                "type": "string",
                "description": "Name of the variable for the selected meta button 1-4.",
                "default": "META_SELECTION",
                "x-parser-schema-id": "<anonymous-schema-149>"
              },
              "variableIdReference": {
                "type": "string",
                "description": "Name of the variable providing the score for calculation of meta outcome.",
                "x-parser-schema-id": "<anonymous-schema-150>"
              },
              "variableIdMetaOutcome": {
                "type": "string",
                "description": "Name of the variable for the combined outcome selection x reference.",
                "default": "META_OUTCOME",
                "x-parser-schema-id": "<anonymous-schema-151>"
              },
              "triggerNavigationOnSelect": {
                "type": "boolean",
                "description": "If true, the selection of any button triggers the navigation to the next unit (with short delay). If false, a continue button must be used instead.",
                "default": true,
                "x-parser-schema-id": "<anonymous-schema-152>"
              }
            },
            "required": [
              "variableIdReference"
            ],
            "additionalProperties": false,
            "x-parser-schema-id": "<anonymous-schema-146>"
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
          "parametersNumberLine": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[7]",
          "parametersPyramid": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[8]",
          "parametersEquation": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[9]",
          "parametersMetaButtons": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[10]",
          "code": "$ref:$.components.schemas.metadata-values.properties.variableInfo.items.properties.codes.items",
          "coding": "$ref:$.components.schemas.metadata-values.properties.variableInfo.items",
          "audioFeedback": "$ref:$.components.schemas.metadata-values.properties.audioFeedback.properties.feedback.items"
        },
        "x-parser-schema-id": "stars-unit-definition@5.4"
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
  