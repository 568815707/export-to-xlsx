![xlsx](https://img.shields.io/badge/-xlsx-blue.svg) ![ES6](https://img.shields.io/badge/-ES6-green.svg)

## Export To Xlsx
The front end exports the XLSX method


## Install

```
    npm install export-to-xlsx
```

## Usage

```javascript

  import ExportToXlsx from 'export-to-xlsx'
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
    ExportToXlsx(headers, data, fileName)
  }
  
```

## Author
* blog: [osenki](http://www.osenki.cn)

    If you have any problem in using it, please feel free to give me feedback. You can communicate with me through the following contact information


## License
ISC

#### Keywords

xlsx csv

