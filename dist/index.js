"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createMediaMatcher_1 = require("./createMediaMatcher");
exports.createMediaMatcher = createMediaMatcher_1.createMediaMatcher;
var mediaDefaults_1 = require("./mediaDefaults");
var defaultMedia = createMediaMatcher_1.createMediaMatcher(mediaDefaults_1.default);
var pickMatch = defaultMedia.pickMatch;
exports.pickMatch = pickMatch;
var ProvideMediaMatchers = defaultMedia.ProvideMediaMatchers;
exports.ProvideMediaMatchers = ProvideMediaMatchers;
var MediaMatches = defaultMedia.MediaMatches;
exports.MediaMatches = MediaMatches;
var InlineMediaMatcher = defaultMedia.InlineMediaMatcher;
exports.InlineMediaMatcher = InlineMediaMatcher;
var MediaMatcher = defaultMedia.MediaMatcher;
exports.MediaMatcher = MediaMatcher;
var Matches = defaultMedia.Matches;
exports.Matches = Matches;