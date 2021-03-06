# wavefile
Copyright (c) 2017-2018 Rafael da Silva Rocha.  
https://github.com/rochars/wavefile

[![NPM version](https://img.shields.io/npm/v/wavefile.svg?style=for-the-badge)](https://www.npmjs.com/package/wavefile) [![Docs](https://img.shields.io/badge/API-docs-blue.svg?style=for-the-badge)](https://rochars.github.io/wavefile/api/) [![Manual](https://img.shields.io/badge/manual-online-blue.svg?style=for-the-badge)](https://rochars.github.io/wavefile/) [![Tests](https://img.shields.io/badge/tests-online-blue.svg?style=for-the-badge)](https://rawgit.com/rochars/wavefile/master/test/browser.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/wavefile.svg?style=flat-square)](https://codecov.io/gh/rochars/wavefile) [![Unix Build](https://img.shields.io/travis/rochars/wavefile.svg?style=flat-square)](https://travis-ci.org/rochars/wavefile) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/wavefile.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/wavefile) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/wavefile.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/wavefile/) [![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1880/badge)](https://bestpractices.coreinfrastructure.org/projects/1880)

Create, read and write wav files according to the specs.

- **Zero dependencies**
- **MIT-licensed**
- **Use it out of the box in the browser**
- **Use it out of the box in Node**
- **Use it out of the box with [TypeScript](https://www.typescriptlang.org/)**
- **Handle files up to 2GB**
- **Use it as a command line tool**
- **Less than 10kb minified + compressed, less than 35kb minified**
- Made with **[Closure Compiler](https://github.com/google/closure-compiler)** in mind (works great with others, too)

With **wavefile** you can:

- Create wav files
- Read wav files
- Change the bit depth of the audio
- Read and write RIFF tags
- Set and delete cue points and their labels
- Encode/decode files as ADPCM, A-Law and μ-Law
- Turn RIFF files to RIFX and RIFX to RIFF
- Create or edit BWF metadata ("bext" chunk)

And more.

## Install

### NPM
To use it in your programs:
```
npm install wavefile
```

To use it from the [command line](#cli-usage), install it globally:
```
npm install wavefile -g
```

### Yarn
To use it in your programs:
```
yarn add wavefile
```

To use it from the [command line](#cli-usage), install it globally:
```
yarn global add wavefile
```

### GitHub
This is not recommended as it will also include test and build assets in your installation. If this is what you want, you can:
```
git clone https://github.com/rochars/wavefile
```

And then import/require what you want from the *wavefile* folder:
```
const WaveFile = require('./wavefile/dist/wavefile.umd.js');
```

You can also download one of the files in the *./dist* folder:  
https://github.com/rochars/wavefile/tree/master/dist

## Use

### Node
If you installed via [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com), require WaveFile from **wavefile**:
```javascript
const WaveFile = require('wavefile');
let wav = new WaveFile();
```

This also works:
```javascript
const WaveFile = require('wavefile').default;
let wav = new WaveFile();
```

### ES module
Import WaveFile from **wavefile.js** in the *./dist* folder of this package:
```javascript
import WaveFile from './dist/wavefile.js';
let wav = new WaveFile();
```

### Browser
Use the compiled file in the */dist* folder of this package:
```html
<script src="./dist/wavefile.min.js"></script>
<script>
  var WaveFile = new WaveFile();
</script>
```

Or get it from the [jsDelivr](https://cdn.jsdelivr.net/npm/wavefile) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/wavefile"></script>
```

Or get it from [unpkg](https://unpkg.com/wavefile):
```html
<script src="https://unpkg.com/wavefile"></script>
```

Or as a module from [jspm](https://jspm.io):
```html
<script type="module">
  import WaveFile from 'https://dev.jspm.io/wavefile';
  console.log(new WaveFile());
</script>
```

#### Browser Compatibility
**wavefile** need IE10+ to run. All moderns browsers should work fine. Cross-browser tests are on the [ROADMAP](https://github.com/rochars/wavefile/blob/master/docs/ROADMAP.md).

## Table of Contents
- [Install](#install)
- [Use](#use)
- [See it in action](#see-it-in-action)
- [Example](#example)
- [Operation Manual](#operation-manual)
  * [Create wave files from scratch](#create-wave-files-from-scratch)
  * [Add RIFF tags to files](#add-riff-tags-to-files)
  * [Add cue points to files](#add-cue-points-to-files)
  * [RIFX](#rifx)
  * [IMA-ADPCM](#ima-adpcm)
  * [A-Law](#a-law)
  * [mu-Law](#mu-law)
  * [Change the bit depth](#change-the-bit-depth)
  * [Add BWF metadata](#add-bwf-metadata)
  * [RF64](#rf64)
  * [Command line interface](#cli-usage)
- [API](#api)
  * [The WaveFile methods:](#the-wavefile-methods-)
  * [The WaveFile properties](#the-wavefile-properties)
    + [Cue points](#cue-points)
    + [Sample loops](#sample-loops)
    + [LIST chunk](#list-chunk)
- [The samples](#the-samples)
- [Distribution](#distribution)
- [Contributing to wavefile](#contributing-to-wavefile)
- [References](#references)
- [Legal](#legal)

## See it in action

With **wavefile** you can change the bit depth and compression type of wav files on the fly before loading them in a browser player. This example uses **wavefile** and **wavesurfer** to create a browser player that supports mu-Law, A-Law, IMA ADPCM and all other formats supported by **wavefile**:

https://rochars.github.io/wavefile/example

```javascript
// Load a wav file that is encoded as 4-bit IMA ADPCM:
var wav = new WaveFile(ADPCMFileBuffer);

// Decode the file as 16-bit PCM, supported by most browsers:
wav.fromIMAADPCM();

// Get the DataURI of your new, browser-friendly wav file:
var wavDataURI = wav.toDataURI();

// Load your new wav file into your player
// ...
```

Check out wavesurfer:  
https://github.com/katspaugh/wavesurfer.js

## Example
```javascript
const WaveFile = require('wavefile');

// Load a wav file from disk into a WaveFile object
let wav = new WaveFile(buffer);

// Check some of the file properties
console.log(wav.container);
console.log(wav.chunkSize);
console.log(wav.fmt.chunkId);

// Call toBuffer() to get the bytes of the file.
// You can write the output straight to disk:
let wavBuffer = wav.toBuffer();

// Call toDataURI() to get the file as a DataURI:
let wavDataURI = wav.toDataURI();
```

## Operation Manual

### Create wave files from scratch
You must inform the number of channels, the sample rate, the bit depth and the samples (in this order).

#### Mono:
```javascript
let wav = new WaveFile();

// Create a mono wave file, 44.1 kHz, 32-bit and 4 samples
wav.fromScratch(1, 44100, '32', [0, -2147483648, 2147483647, 4]);
fs.writeFileSync(path, wav.toBuffer());
```

#### Stereo:
Samples can be informed interleaved or de-interleaved. If they are de-interleaved, WaveFile will interleave them. In this example they are de-interleaved.
```javascript
// Stereo, 48 kHz, 8-bit, de-interleaved samples
// WaveFile interleave the samples automatically
wav.fromScratch(2, 48000, '8', [
    [0, -2, 4, 3],
    [0, -1, 4, 3]
]);
fs.writeFileSync(path, wav.toBuffer());
```
Possible values for the bit depth are:  
"4" - 4-bit IMA-ADPCM  
"8" - 8-bit  
"8a" - 8-bit A-Law  
"8m" - 8-bit mu-Law  
"16" - 16-bit  
"24" - 24-bit  
"32" - 32-bit  
"32f" - 32-bit floating point  
"64" - 64-bit floating point

You can also use any bit depth between "8" and "53", like **"11", "12", "17", "20" and so on**.

#### A word on bit depth
Resolutions other than 4-bit, 8-bit, 16-bit, 24-bit, 32-bit (integer), 32-bit (fp) and 64-bit (fp) are implemented as WAVE_FORMAT_EXTENSIBLE and may not be supported by some players.

### Add RIFF tags to files
You can create (or overwrite) tags on files with the **WaveFile.setTag()** method.
```javascript
// Write the ICMT tag with some comments to the file
wav.setTag("ICMT", "some comments");
```

To get the value of a tag (if it exists), use **WaveFile.getTag()**:
```javascript
console.log(wav.getTag("ICMT"));
// some comments
```

You can delete a tag with **WaveFile.deleteTag()**:
```javascript
wav.deleteTag("ICMT");
```

### Add cue points to files
You can create cue points using the **WaveFile.setCuePoint()** method. The method takes time in milliseconds, a text label and creates a cue point in the corresponding position of the file:
```javascript
wav.setCuePoint(1750, "some label for the cue point");
```

To delete a cue point use **WaveFile.deleteCuePoint()** informing the index of the point. Points are ordered according to their position. The first point is indexed as 1.
```javascript
wav.deleteCuePoint(1);
```

Mind that creating or deleting cue points will change the index of other points if they exist.

### RIFX
**wavefile** can handle existing RIFX files and create RIFX files from scratch. Files created from scratch will default to RIFF; to create a file as RIFX you must define the container:
```javascript
wav.fromScratch(1, 48000, '16', [0, 1, -32768, 32767], {"container": "RIFX"});
```

RIFX to RIFF and RIFF to RIFX:
```javascript
// Turn a RIFF file to a RIFX file
wav.toRIFX();

// Turn a RIFX file to a RIFF file
wav.toRIFF();
```

### IMA-ADPCM
16-bit 8000 Hz mono wave files can be compressed as IMA-ADPCM:
```javascript
// Encode a 16-bit wave file as 4-bit IMA-ADPCM:
wav.toIMAADPCM();
```
IMA-ADPCM files compressed with **wavefile** will have a block align of 256 bytes.

If the audio is not 16-bit it will be converted to 16-bit before compressing. Compressing audio with sample rate different from 8000 Hz or more than one channel is not supported and will throw errors.

To decode 4-bit IMA-ADPCM as 16-bit linear PCM:
```javascript
// Decode 4-bit IMA-ADPCM as 16-bit:
wav.fromIMAADPCM();
```

Decoding always result in 16-bit audio. To decode to another bit depth:
```javascript
// Decode 4-bit IMA-ADPCM as 24-bit:
wav.fromIMAADPCM("24");
```

### A-Law
16-bit wave files (mono or stereo) can be encoded as A-Law:
```javascript
// Encode a 16-bit wave file as 8-bit A-law:
wav.toALaw();
```
If the audio is not 16-bit it will be converted to 16-bit before compressing.

To decode 8-bit A-Law as 16-bit linear PCM:
```javascript
// Decode 8-bit A-Law as 16-bit:
wav.fromALaw();
```

Decoding always result in 16-bit audio. To decode to another bit depth:
```javascript
// Decode 8-bit A-Law as 24-bit:
wav.fromALaw("24");
```

### mu-Law
16-bit wave files (mono or stereo) can be encoded as mu-Law:
```javascript
// Encode a 16-bit wave file as 8-bit mu-law:
wav.toMuLaw();
```
If the audio is not 16-bit it will be converted to 16-bit before compressing.

To decode 8-bit mu-Law as 16-bit linear PCM:
```javascript
// Decode 8-bit mu-Law as 16-bit:
wav.fromMuLaw();
```

Decoding always result in 16-bit audio. To decode to another bit depth:
```javascript
// Decode 8-bit mu-Law as 24-bit:
wav.fromMuLaw("24");
```

### Change the bit depth
You can change the bit depth of the audio with the **toBitDepth(bitDepth)** method.
```javascript
// Load a wav file with 32-bit audio
let wav = new WaveFile(fs.readFileSync("32bit-file.wav"));

// Change the bit depth to 24-bit
wav.toBitDepth("24");

// Write the new 24-bit file
fs.writeFileSync("24bit-file.wav", wav.toBuffer());
```

### Add BWF metadata
To add BWF data to a file you can use the **bext** property:
```javascript
// Load a wav file with no "bext"
let wav = new WaveFile(fs.readFileSync("32bit-file.wav"));

// Add some BWF metadata
wav.bext.originator = "wavefile";

// Write the new BWF file
fs.writeFileSync("32bit-file-with-bext.wav", wav.toBuffer());
```

By default **wavefile** will not insert a "bext" chunk in new files or in files that do not already have a "bext" chunk unless a property of **WaveFile.bext** is changed from it's default value. See below the full list of properties in **WaveFile.bext**.

### RF64
**wavefile** have limited support of RF64 files. It possible to read (at least some) RF64 files, but changing the bit depth or applying compression to the samples will result in a RIFF file.

### CLI Usage
**wavefile** can run as a command line tool. To use **wavefile** from the command line, install it globally:
```
npm install wavefile -g
```

To see the available options:
```
wavefile --help
```

The available options:
```
  --bitdepth   Ex: wavefile input.wav --bitdepth=32f output.wav
               Change the bit depth.
               The input file is not affected.
               Possible values: 8, 16, 24, 32, 32f, 64

  --compress   Ex: wavefile input.wav --compress=adpcm output.wav
               Apply compression to the file.
               The input file is not affected.
               Possible values: adpcm, alaw, mulaw

  --tag        Ex: wavefile input.wav --tag=ICRD
               Print the value of tag if the tag exists.

  --list-tags  Ex: wavefile input.wav --list-tags
               Print all tags of the file.

  --list-cue   Ex: wavefile input.wav --list-cue
               Print all the cue points of the file.

  --bits       Ex: wavefile input.wav --bits
               Print the bit depth of the file.

  --rate       Ex: wavefile input.wav --rate
               Print the sample rate of the file.

  --help       Ex: --help
               Show this help page.
```

## API
To create a WaveFile object:
```javascript
/**
 * @param {?Uint8Array} bytes A wave file buffer.
 * @throws {Error} If no "RIFF" chunk is found.
 * @throws {Error} If no "fmt " chunk is found.
 * @throws {Error} If no "data" chunk is found.
 */
WaveFile(bytes=null);
```

### The WaveFile methods
```javascript
/**
 * Set up the WaveFile object based on the arguments passed.
 * @param {number} numChannels The number of channels
 *      (Integer numbers: 1 for mono, 2 stereo and so on).
 * @param {number} sampleRate The sample rate.
 *      Integer numbers like 8000, 44100, 48000, 96000, 192000.
 * @param {string} bitDepth The audio bit depth code.
 *      One of "4", "8", "8a", "8m", "16", "24", "32", "32f", "64"
 *      or any value between "8" and "32" (like "12").
 * @param {!Array<number>} samples Array of samples to be written.
 *      The samples must be in the correct range according to the
 *      bit depth.
 * @param {?Object} options Optional. Used to force the container
 *      as RIFX with {"container": "RIFX"}
 * @throws {Error} If any argument does not meet the criteria.
 */
WaveFile.fromScratch(numChannels, sampleRate, bitDepth, samples, options={}) {}

/**
 * Set up the WaveFile object from a byte buffer.
 * @param {!Uint8Array} bytes The buffer.
 * @throws {Error} If container is not RIFF, RIFX or RF64.
 * @throws {Error} If no "fmt " chunk is found.
 * @throws {Error} If no "data" chunk is found.
 */
WaveFile.fromBuffer(bytes) {}

/**
 * Return a byte buffer representig the WaveFile object as a .wav file.
 * The return value of this method can be written straight to disk.
 * @return {!Uint8Array} A .wav file.
 * @throws {Error} If any property of the object appears invalid.
 */
WaveFile.toBuffer() {}

/**
 * Use a .wav file encoded as a base64 string to load the WaveFile object.
 * @param {string} base64String A .wav file as a base64 string.
 * @throws {Error} If any property of the object appears invalid.
 */
WaveFile.fromBase64(base64String) {}

/**
 * Return a base64 string representig the WaveFile object as a .wav file.
 * @return {string} A .wav file as a base64 string.
 * @throws {Error} If any property of the object appears invalid.
 */
WaveFile.toBase64() {}

/**
 * Return a DataURI string representig the WaveFile object as a .wav file.
 * The return of this method can be used to load the audio in browsers.
 * @return {string} A .wav file as a DataURI.
 * @throws {Error} If any property of the object appears invalid.
 */
WaveFile.toDataURI() {}

/**
 * Use a .wav file encoded as a DataURI to load the WaveFile object.
 * @param {string} dataURI A .wav file as DataURI.
 * @throws {Error} If any property of the object appears invalid.
 */
WaveFile.fromDataURI(dataURI) {}

/**
 * Force a file as RIFF.
 */
WaveFile.toRIFF() {}

/**
 * Force a file as RIFX.
 */
WaveFile.toRIFX() {}

/**
 * Change the bit depth of the samples.
 * @param {string} bitDepth The new bit depth of the samples.
 *      One of "8" ... "32" (integers), "32f" or "64" (floats)
 * @param {boolean} changeResolution A boolean indicating if the
 *      resolution of samples should be actually changed or not.
 * @throws {Error} If the bit depth is not valid.
 */
WaveFile.toBitDepth(bitDepth, changeResolution=true) {}

/**
 * Encode a 16-bit wave file as 4-bit IMA ADPCM.
 * @throws {Error} If sample rate is not 8000.
 * @throws {Error} If number of channels is not 1.
 */
WaveFile.toIMAADPCM() {}

/**
 * Decode a 4-bit IMA ADPCM wave file as a 16-bit wave file.
 * @param {string} bitDepth The new bit depth of the samples.
 *      One of "8" ... "32" (integers), "32f" or "64" (floats).
 *      Optional. Default is 16.
 */
WaveFile.fromIMAADPCM(bitDepth='16') {}

/**
 * Encode 16-bit wave file as 8-bit A-Law.
 */
WaveFile.toALaw() {}

/**
 * Decode a 8-bit A-Law wave file into a 16-bit wave file.
 * @param {string} bitDepth The new bit depth of the samples.
 *      One of "8" ... "32" (integers), "32f" or "64" (floats).
 *      Optional. Default is 16.
 */
WaveFile.fromALaw(bitDepth='16') {}

/**
 * Encode 16-bit wave file as 8-bit mu-Law.
 */
WaveFile.toMuLaw() {}

/**
 * Decode a 8-bit mu-Law wave file into a 16-bit wave file.
 * @param {string} bitDepth The new bit depth of the samples.
 *      One of "8" ... "32" (integers), "32f" or "64" (floats).
 *      Optional. Default is 16.
 */
WaveFile.fromMuLaw(bitDepth='16') {}

/**
 * Write a RIFF tag in the INFO chunk. If the tag do not exist,
 * then it is created. It if exists, it is overwritten.
 * @param {string} tag The tag name.
 * @param {string} value The tag value.
 * @throws {Error} If the tag name is not valid.
 */
WaveFile.setTag(tag, value) {}

/**
 * Return the value of a RIFF tag in the INFO chunk.
 * @param {string} tag The tag name.
 * @return {?string} The value if the tag is found, null otherwise.
 */
WaveFile.getTag(tag) {}

/**
 * Remove a RIFF tag in the INFO chunk.
 * @param {string} tag The tag name.
 * @return {boolean} True if a tag was deleted.
 */
WaveFile.deleteTag(tag) {}

/**
 * Return a Object<tag, value> with the RIFF tags in the file.
 * @return {!Object<string, string>} The file tags.
 */
WaveFile.listTags() {}

/**
 * Create a cue point in the wave file.
 * @param {number} position The cue point position in milliseconds.
 * @param {string} labl The LIST adtl labl text of the marker. Optional.
 */
WaveFile.setCuePoint(position, labl='') {}

/**
 * Remove a cue point from a wave file.
 * @param {number} index the index of the point. First is 1,
 *      second is 2, and so on.
 */
WaveFile.deleteCuePoint(index) {}

/**
 * Return an array with all cue points in the file, in the order they appear
 * in the file.
 * The difference between this method and using the list in WaveFile.cue
 * is that the return value of this method includes the position in
 * milliseconds of each cue point (WaveFile.cue only have the sample offset)
 * @return {!Array<!Object>}
 * @private
 */
listCuePoints() {}

/**
 * Update the label of a cue point.
 * @param {number} pointIndex The ID of the cue point.
 * @param {string} label The new text for the label.
 */
WaveFile.updateLabel(pointIndex, label) {}
```

#### WaveFile.listCuePoints()
This method returns a list like this:
```javascript
[
  {
    milliseconds: 1000, // the position in milliseconds
    dwPosition: 8000, // the sample offset of the point
    label: "cue marker 2" // the label of the point
  },
]
```
The list order reflects the order of the points in the file.

### The WaveFile properties
```javascript
/**
 * The container identifier.
 * "RIFF", "RIFX" and "RF64" are supported.
 * @type {string}
 */
WaveFile.container = '';
/**
 * @type {number}
 */
WaveFile.chunkSize = 0;
/**
 * The format.
 * Always 'WAVE'.
 * @type {string}
 */
WaveFile.format = '';
/**
 * The data of the "fmt" chunk.
 * @type {!Object<string, *>}
 */
WaveFile.fmt = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    audioFormat: 0,
    /** @type {number} */
    numChannels: 0,
    /** @type {number} */
    sampleRate: 0,
    /** @type {number} */
    byteRate: 0,
    /** @type {number} */
    blockAlign: 0,
    /** @type {number} */
    bitsPerSample: 0,
    /** @type {number} */
    cbSize: 0,
    /** @type {number} */
    validBitsPerSample: 0,
    /** @type {number} */
    dwChannelMask: 0,
    /**
     * 4 32-bit values representing a 128-bit ID
     * @type {!Array<number>}
     */
    subformat: []
};
/**
 * The data of the "fact" chunk.
 * @type {!Object<string, *>}
 */
WaveFile.fact = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    dwSampleLength: 0
};
/**
 * The data of the "cue " chunk.
 * @type {!Object<string, *>}
 */
WaveFile.cue = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    dwCuePoints: 0,
    /** @type {!Array<!Object>} */
    points: [],
};
/**
 * The data of the "smpl" chunk.
 * @type {!Object<string, *>}
 */
WaveFile.smpl = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    dwManufacturer: 0,
    /** @type {number} */
    dwProduct: 0,
    /** @type {number} */
    dwSamplePeriod: 0,
    /** @type {number} */
    dwMIDIUnityNote: 0,
    /** @type {number} */
    dwMIDIPitchFraction: 0,
    /** @type {number} */
    dwSMPTEFormat: 0,
    /** @type {number} */
    dwSMPTEOffset: 0,
    /** @type {number} */
    dwNumSampleLoops: 0,
    /** @type {number} */
    dwSamplerData: 0,
    /** @type {!Array<!Object>} */
    loops: [],
};
/**
 * The data of the "bext" chunk.
 * @type {!Object<string, *>}
 */
WaveFile.bext = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {string} */
    description: '', //256
    /** @type {string} */
    originator: '', //32
    /** @type {string} */
    originatorReference: '', //32
    /** @type {string} */
    originationDate: '', //10
    /** @type {string} */
    originationTime: '', //8
    /**
     * 2 32-bit values, timeReference high and low
     * @type {!Array<number>}
     */
    timeReference: [0, 0],
    /** @type {number} */
    version: 0, //WORD
    /** @type {string} */
    UMID: '', // 64 chars
    /** @type {number} */
    loudnessValue: 0, //WORD
    /** @type {number} */
    loudnessRange: 0, //WORD
    /** @type {number} */
    maxTruePeakLevel: 0, //WORD
    /** @type {number} */
    maxMomentaryLoudness: 0, //WORD
    /** @type {number} */
    maxShortTermLoudness: 0, //WORD
    /** @type {string} */
    reserved: '', //180
    /** @type {string} */
    codingHistory: '' // string, unlimited
};
/**
 * The data of the "ds64" chunk.
 * Used only with RF64 files.
 * @type {!Object<string, *>}
 */
WaveFile.ds64 = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {number} */
    riffSizeHigh: 0, // DWORD
    /** @type {number} */
    riffSizeLow: 0, // DWORD
    /** @type {number} */
    dataSizeHigh: 0, // DWORD
    /** @type {number} */
    dataSizeLow: 0, // DWORD
    /** @type {number} */
    originationTime: 0, // DWORD
    /** @type {number} */
    sampleCountHigh: 0, // DWORD
    /** @type {number} */
    sampleCountLow: 0, // DWORD
    /** @type {number} */
    //"tableLength": 0, // DWORD
    /** @type {!Array<number>} */
    //"table": []
};
/**
 * The data of the "data" chunk.
 * @type {!Object<string, *>}
 */
WaveFile.data = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {!Uint8Array} */
    samples: new Uint8Array(0)
};
/**
 * The data of the "LIST" chunks.
 * Each item in this list look like this:
 *  {
 *      chunkId: '',
 *      chunkSize: 0,
 *      format: '',
 *      subChunks: []
 *   }
 * @type {!Array<!Object>}
 */
WaveFile.LIST = [];
/**
 * The data of the "junk" chunk.
 * @type {!Object<string, *>}
 */
WaveFile.junk = {
    /** @type {string} */
    chunkId: '',
    /** @type {number} */
    chunkSize: 0,
    /** @type {!Array<number>} */
    chunkData: []
};
/**
 * The bit depth code according to the samples.
 * @type {string}
 */
WaveFile.bitDepth =  '';
```

#### Cue points
Items in *cue.points* are objects that look like this:
```javascript
{
    /** @type {number} */
    dwName: 0, // a cue point ID
    /** @type {number} */
    dwPosition: 0,
    /** @type {number} */
    fccChunk: 0,
    /** @type {number} */
    dwChunkStart: 0,
    /** @type {number} */
    dwBlockStart: 0,
    /** @type {number} */
    dwSampleOffset: 0
}
```

#### Sample loops
Items in *smpl.loops* are objects that look like this:
```javascript
{
    /** @type {string} */
    dwName: '', // a cue point ID
    /** @type {number} */
    dwType: 0,
    /** @type {number} */
    dwStart: 0,
    /** @type {number} */
    dwEnd: 0,
    /** @type {number} */
    dwFraction: 0,
    /** @type {number} */
    dwPlayCount: 0
}
```

#### LIST chunk
"LIST" chunk data is stored as follows:
```javascript
/**
 * An array of the "LIST" chunks present in the file.
 * @type {!Array<!Object>}
 */
WaveFile.LIST = [];
```

Items in *WaveFile.LIST* are objects that look like this:
```javascript
{
    /** @type {string} */
    chunkId: '', // always 'LIST'
    /** @type {number} */
    chunkSize: 0,
    /** @type {string} */
    format: '', // 'adtl' or 'INFO'
    /** @type {!Array<!Object>} */
    subChunks: []
};
```
Where "subChunks" are the subChunks of the "LIST" chunk. A single file may have many "LIST" chunks as long as their formats ("INFO", "adtl", etc) are not the same. **wavefile** can read and write "LIST" chunks of format "INFO" and "adtl".

For "LIST" chunks with the "INFO" format, "subChunks" will be an array of objects like this:
```javascript
{
    /** @type {string} */
    chunkId: '', // some RIFF tag
    /** @type {number} */
    chunkSize 0,
    /** @type {string} */
    value: ''
}
```
Where "chunkId" may be any RIFF tag:  
https://sno.phy.queensu.ca/~phil/exiftool/TagNames/RIFF.html#Info

## The samples
Samples are stored in WaveFile.data.samples as a Uint8Array.
Range:
- 0 to 255 for 8-bit
- -32768 to 32767 for 16-bit
- -8388608 to 8388607 for 24-bit
- -2147483648 to 2147483647 for 32-bit
- -1.0 to 1.0 for 32-bit (float)
- -1.0 to 1.0 for 64-bit (float)

## Distribution
This library is a ES module also distributed as a CommonJS module, UMD module and a compiled script for browsers. It works out of the box in Node when installed with ```npm install wavefile```. It includes a [TypeScript](https://www.typescriptlang.org/) definition file.

If you use the [Closure Compiler](https://github.com/google/closure-compiler), this package includes a externs file: **./externs/wavefile.js**.

### If you are using this lib in a browser:

You may load both **./dist/wavefile.umd.js** and **./dist/wavefile.min.js** in the browser with ```<script>``` tags. Ideally you should use **wavefile.min.js**. You can load it via the https://unpkg.com and https://www.jsdelivr.com/ CDNs:

[unpkg](https://unpkg.com/wavefile):
```html
<script src="https://unpkg.com/wavefile"></script>
```

[jsDelivr](https://cdn.jsdelivr.net/npm/wavefile):
```html
<script src="https://cdn.jsdelivr.net/npm/wavefile"></script>
```

### If you are using this lib as a dependency:

- The **CommonJS** dist is **./dist/wavefile.cjs.js**. It is the dist file used by Node. It is served in the "main" field of package.json and is the source you are running when you **npm install wavefile**. It is not compiled or minified.

- The **UMD** module is **./dist/wavefile.umd.js**. It is transpiled to ES5 and compatible with Node, AMD and browsers. It is served in the "browser" field of package.json.

- The **browser-only** dist is **./dist/wavefile.min.js**. It is transpiled to ES5 and compiled. It is used in the "unpkg" and "jsdelivr" fields of package.json.

- The **ES6 bundle** is **./dist/wavefile.js**, served as "es2015" in package.json. It is not compiled/minified.

- **./index.js** is served as "module" in package.json. This should be the entry point for bundlers.

If your module bundler is using "browser" as the entry point **your dist should work the same** but will be a larger file.

## Contributing to wavefile
**wavefile** welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small and all contributions are valued.

See [CONTRIBUTING.md](https://github.com/rochars/wavefile/blob/master/docs/CONTRIBUTING.md) for details.

### Style guide
**wavefile** code should follow the Google JavaScript Style Guide:  
https://google.github.io/styleguide/jsguide.html

### Code of conduct
This project is bound by a Code of Conduct: The [Contributor Covenant, version 1.4](https://github.com/rochars/wavefile/blob/master/docs/CODE_OF_CONDUCT.md), also available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

## References

### Papers
https://tech.ebu.ch/docs/tech/tech3285.pdf  
https://tech.ebu.ch/docs/tech/tech3306-2009.pdf  
http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html  
https://www.loc.gov/preservation/digital/formats/fdd/fdd000356.shtml  
http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/Docs/riffmci.pdf  
https://sites.google.com/site/musicgapi/technical-documents/wav-file-format  
http://www.neurophys.wisc.edu/auditory/riff-format.txt  
https://sno.phy.queensu.ca/~phil/exiftool/TagNames/RIFF.html#Info

### Software
https://github.com/erikd/libsndfile  
https://gist.github.com/hackNightly/3776503  
https://github.com/chirlu/sox/blob/master/src/wav.c

### Other
https://developercertificate.org/  
https://www.contributor-covenant.org/version/1/4/code-of-conduct.html  
https://google.github.io/styleguide/jsguide.html

## Legal
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Frochars%2Fwavefile.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Frochars%2Fwavefile?ref=badge_large)

### LICENSE
Copyright (c) 2017-2018 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
