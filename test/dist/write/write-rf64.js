/**
 * WaveFile: https://github.com/rochars/wavefile
 * Copyright (c) 2017-2018 Rafael da Silva Rocha. MIT License.
 *
 * Test writing RF64 files. RF64 has limited support;
 * It is possible to read (at least some) RF64 files and write
 * them back to disk, but not to create them from scratch.
 *
 * Only tested with files with less than 4gb and no table.
 * 
 */

const assert = require("assert");
const fs = require("fs");
const WaveFile = require("../../../test/loader.js");
const path = "./test/files/";

describe("64-bit writing (file < 64-bit)", function() {
    
    let wav = new WaveFile(
        fs.readFileSync(path + "RF64-16bit-8kHz-stereo-reaper.wav"));
    fs.writeFileSync(
        path + "out/RF64-16-bit-8kHz-stereo-reaper.wav", wav.toBuffer());
    wav = new WaveFile(
        fs.readFileSync(path + "out/RF64-16-bit-8kHz-stereo-reaper.wav"));

    it("chunkId should be 'RF64'", function() {
        assert.equal(wav.container, "RF64");
    });
    it("chunkSize should be the same as wav.ds64.riffSizeHigh", function() {
        assert.equal(wav.chunkSize, wav.ds64.riffSizeHigh);
    });
    // ds64 fields
    it("ds64 chunk should not be null", function() {
        assert.equal(wav.ds64.chunkId, "ds64");
    });
    it("ds64 chunkSize should be 28", function() {
        assert.equal(wav.ds64.chunkSize, 28);
    });
    it("ds64.riffSizeHigh should not be null", function() {
        assert.ok(wav.ds64.riffSizeHigh);
    });
    it("ds64.riffSizeLow should be 0", function() {
        assert.equal(wav.ds64.riffSizeLow, 0);
    });
    it("wav.data.chunkSize should be the same as wav.ds64.dataSizeHigh",
            function() {
        assert.ok(wav.ds64.dataSizeHigh, wav.data.chunkSize);
    });
    it("ds64.dataSizeLow should be 0", function() {
        assert.equal(wav.ds64.dataSizeLow, 0);
    });
    it("ds64.sampleCountHigh should be 0", function() {
        assert.equal(wav.ds64.sampleCountHigh, 0);
    });
    it("ds64.sampleCountLow should be 0", function() {
        assert.equal(wav.ds64.sampleCountLow, 0);
    });
    //it("ds64.tableLength should be 0", function() {
    //    assert.equal(wav.ds64.tableLength, 0);
    //});
    //it("ds64.table should not be null", function() {
    //    assert.deepEqual(wav.ds64.table, []);
    //});
    // Default .wav tests
    it("fmtChunkId should be 'fmt '", function() {
        assert.equal(wav.fmt.chunkId, "fmt ");
    });
    it("format should be 'WAVE'", function() {
        assert.equal(wav.format, "WAVE");
    });
    it("fmtChunkSize should be 16", function() {
        assert.equal(wav.fmt.chunkSize, 16);
    });
    it("audioFormat should be 1", function() {
        assert.equal(wav.fmt.audioFormat, 1);
    });
    it("numChannels should be 2", function() {
        assert.equal(wav.fmt.numChannels, 2);
    });
    it("sampleRate should be 8000", function() {
        assert.equal(wav.fmt.sampleRate, 8000);
    });
    it("byteRate should be 32000", function() {
        assert.equal(wav.fmt.byteRate, 32000);
    });
    it("blockAlign should be 4", function() {
        assert.equal(wav.fmt.blockAlign, 4);
    });
    it("bitsPerSample should be 16", function() {
        assert.equal(wav.fmt.bitsPerSample, 16);
    });
    it("dataChunkId should be 'data'", function() {
        assert.equal(wav.data.chunkId, 'data');
    });
    it("dataChunkSize should be > 0", function() {
        assert.ok(wav.data.chunkSize > 0);
    });
    it("samples.length should be > 0", function() {
        assert.ok(wav.data.samples.length > 0);
    });
});
