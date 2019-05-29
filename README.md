![xlsx](https://img.shields.io/badge/-xlsx-blue.svg) ![ES6](https://img.shields.io/badge/-ES6-green.svg)

## Export To Csv
A method to export CSV


## Install

```
    npm install export-to-csv
```

## Usage

```javascript

  import ExportToCsv from 'export-to-csv'
  ...
  
  function exportData (data) {
      
      const fileName = 'output'
      
      const headers = [
          {
              k: 'key',
              v: 'value'
          },
          ...
        ]
    exportToCsv(headers, data, fileName)
  }
  
```

## Author
* blog: [osenki](http://www.osenki.cn)

    If you have any problem in using it, please feel free to give me feedback. You can communicate with me through the following contact information


## License
ISC

#### Keywords

xlsx csv

