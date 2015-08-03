/*jslint node:true, browser:true */
/*global describe, it */
'use strict';
/*
    Copyright 2015 Enigma Marketing Services Limited

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

var assert = require("assert"),
    dots2brackets = require('../lib');

describe('Dots 2 Brackets', function () {
    it('should return same string', function () {
        var result = dots2brackets("data['example']['12345']['title']"),
            expected = "data['example']['12345']['title']";

        assert.equal(result, expected);
    });
    it('should convert all dots', function () {
        var result = dots2brackets("data.example.12345.title"),
            expected = "data['example']['12345']['title']";

        assert.equal(result, expected);
    });
    it('should convert mixed notation', function () {
        var result = dots2brackets("data.example['12345'].title"),
            expected = "data['example']['12345']['title']";

        assert.equal(result, expected);
    });
    it('should convert mixed notation with ints', function () {
        var result = dots2brackets("data.example[0].title"),
            expected = "data['example']['0']['title']";

        assert.equal(result, expected);
    });
    it('should convert double to single quotes', function () {
        var result = dots2brackets("data.example[\"12345\"].title"),
            expected = "data['example']['12345']['title']";

        assert.equal(result, expected);
    });
});