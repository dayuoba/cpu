cpu
===

[![NPM](https://nodei.co/npm/cpu.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cpu/)

### Status

[![Build Status](https://travis-ci.org/dayuoba/cpu.png)](https://travis-ci.org/dayuoba/cpu)

### Install

```bash
npm install cpu
```

### Usage

```javascript
var cpu = require('cpu');

var num = cpu.num();//return CPU's nums

cpu.usage(function(usages) {
  console.log(usages);
});// use callback to handle the CPUUsage Array

``` 
