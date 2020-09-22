"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.people = exports.show = exports.movie = exports.configuration = exports.apiStatus = void 0;
require("dotenv").config();
var axios_1 = require("axios");
var utils_1 = require("../utils");
var api = axios_1.default.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: process.env.API_KEY,
        language: "ko-KR",
        region: "KR",
    },
});
// API Reqeust status
exports.apiStatus = {
    loading: false,
    error: null,
};
exports.configuration = function () { return __awaiter(void 0, void 0, void 0, function () {
    var config, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                exports.apiStatus.loading = true;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 5]);
                return [4 /*yield*/, api.get("configuration")];
            case 2:
                (config = (_a.sent()).data);
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                exports.apiStatus.error = error_1;
                return [3 /*break*/, 5];
            case 4:
                exports.apiStatus.loading = false;
                return [2 /*return*/, config];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Movie API
exports.movie = {
    nowPlaying: function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Get now playing movies
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("movie/now_playing")];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    exports.apiStatus.error = error_2;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    upcoming: function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Get upcoming movies
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("movie/upcoming")];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_3 = _a.sent();
                    exports.apiStatus.error = error_3;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    popular: function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Get popular movies
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("movie/popular")];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_4 = _a.sent();
                    exports.apiStatus.error = error_4;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    movieDetail: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("movie/" + id, {
                            params: {
                                append_to_response: "videos,credits",
                            },
                        })];
                case 2:
                    (result = (_a.sent()).data);
                    return [3 /*break*/, 5];
                case 3:
                    error_5 = _a.sent();
                    exports.apiStatus.error = error_5;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, result];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    search: function (term) { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("search/movie", {
                            params: {
                                // themoviedb API aitomatically URIencodes search term
                                query: term,
                            },
                        })];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_6 = _a.sent();
                    exports.apiStatus.error = error_6;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
};
// TV Show API
exports.show = {
    topRated: function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("tv/top_rated")];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_7 = _a.sent();
                    exports.apiStatus.error = error_7;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    popular: function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("tv/popular")];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_8 = _a.sent();
                    exports.apiStatus.error = error_8;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    airingToday: function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("tv/airing_today")];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_9 = _a.sent();
                    exports.apiStatus.error = error_9;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    showDetail: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("tv/" + id, {
                            params: {
                                append_to_response: "videos,credits",
                            },
                        })];
                case 2:
                    (result = (_a.sent()).data);
                    return [3 /*break*/, 5];
                case 3:
                    error_10 = _a.sent();
                    exports.apiStatus.error = error_10;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, result];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    seasonDeatil: function (showId, seasonNumber) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("tv/" + showId + "/season/" + seasonNumber)];
                case 2:
                    (result = (_a.sent()).data);
                    return [3 /*break*/, 5];
                case 3:
                    error_11 = _a.sent();
                    exports.apiStatus.error = error_11;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, result];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    episodeDetail: function (showId, seasonNumber, episodeNumber) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("tv/" + showId + "/season/" + seasonNumber + "/episode/" + episodeNumber)];
                case 2:
                    (result = (_a.sent()).data);
                    return [3 /*break*/, 5];
                case 3:
                    error_12 = _a.sent();
                    exports.apiStatus.error = error_12;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, result];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    search: function (term) { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("search/tv", {
                            params: {
                                // themoviedb API aitomatically URIencodes search term
                                query: term,
                            },
                        })];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_13 = _a.sent();
                    exports.apiStatus.error = error_13;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
};
// People API
exports.people = {
    personDetail: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, movieCredits, korKnownNames, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("person/" + id, {
                            params: {
                                append_to_response: "movie_credits",
                            },
                        })];
                case 2:
                    (result = (_a.sent()).data);
                    korKnownNames = result.also_known_as.filter(function (name) { return utils_1.isKorean(name); });
                    result.also_known_as = korKnownNames;
                    // Destruct appended movie_credits into cast and crew objects
                    movieCredits = result.movie_credits;
                    delete result.movie_credits;
                    result = __assign(__assign({}, result), movieCredits);
                    return [3 /*break*/, 5];
                case 3:
                    error_14 = _a.sent();
                    exports.apiStatus.error = error_14;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, result];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    search: function (term) { return __awaiter(void 0, void 0, void 0, function () {
        var results, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    exports.apiStatus.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api.get("search/person", {
                            params: {
                                // themoviedb API aitomatically URIencodes search term
                                query: term,
                            },
                        })];
                case 2:
                    (results = (_a.sent()).data.results);
                    return [3 /*break*/, 5];
                case 3:
                    error_15 = _a.sent();
                    exports.apiStatus.error = error_15;
                    return [3 /*break*/, 5];
                case 4:
                    exports.apiStatus.loading = false;
                    return [2 /*return*/, results];
                case 5: return [2 /*return*/];
            }
        });
    }); },
};
