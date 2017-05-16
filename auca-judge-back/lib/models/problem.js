"use strict";

const mongoose =
  require("mongoose");

const BuildConfigurationSchema =
  new mongoose.Schema({
    "image": {
      "type": String,
      "required": true
    },
    "extension": String,
    "artifactExtension": String
  });

const TestSchema =
  new mongoose.Schema({
    "input": {
      "type": String,
      "required": true
    },
    "output": {
      "type": String,
      "required": true
    }
  });

const TestConfigurationSchema =
  new mongoose.Schema({
    "image": {
      "type": String,
      "required": true
    },
    "extension": String,
    "preprocess": Boolean,
    "continueOnFailure": Boolean,
    "evaluator": String,
    "tests": {
      "type": [TestSchema],
      "required": true
    }
  });

const InputOutputExampleSchema =
  new mongoose.Schema({
    "sampleInput": {
      "type": String,
      "required": true
    },
    "desiredOutput": {
      "type": String,
      "required": true
    }
  });

const ProblemSchema =
  new mongoose.Schema({
    "_id": {
      "type": mongoose.Schema.Types.ObjectId,
      "required": true
    },
    "build": {
      "type": BuildConfigurationSchema
    },
    "test": {
      "type": TestConfigurationSchema,
      "required": true
    },
    "name": {
      "type": String,
      "required": true
    },
    "description": {
      "type": String,
      "required": true
    },
    "inputDataDescription": {
      "type": String,
      "required": true
    },
    "outputDataDescription": {
      "type": String,
      "required": true
    },
    "examples": [InputOutputExampleSchema]
  });

module.exports =
ProblemSchema;