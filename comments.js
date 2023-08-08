// Create web server
var express = require('express');
var router = express.Router();

// Import database connection
var db = require('../db');

// Import comment model
var Comment = require('../models/comment');

// Import user model
var User = require('../models/user');

// Import post model
var Post = require('../models/post');

// Import comment validator
var validateComment = require('../validators/comment');

// Import user validator
var validateUser = require('../validators/user');

// Import post validator
var validatePost = require('../validators/post');

// Import comment middleware
var commentMiddleware = require('../middlewares/comment');

// Import user middleware
var userMiddleware = require('../middlewares/user');

// Import post middleware
var postMiddleware = require('../middlewares/post');

// Import auth middleware
var authMiddleware = require('../middlewares/auth');

// Import error handler middleware
var errorHandler = require('../middlewares/errorHandler')