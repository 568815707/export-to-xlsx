import XLSX from 'xlsx';

export default (_headers, _data, fileName = 'output') => {
  try {
    if (_headers && _data) {
      let headers = _headers
      .map((v, i) => Object.assign({}, { k: v.k, v: v.v, position: String.fromCharCode(65 + i) + 1 }))
      .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { k: next.k, v: next.v } }), {});
  
      let data = _data
          .map((v, i) => _headers.map((k, j) => Object.assign({}, { v: v[k.k], position: String.fromCharCode(65 + j) + (i + 2) })))

          // 对刚才的结果进行降维处理（二维数组变成一维数组）
          .reduce((prev, next) => prev.concat(next))
          
          // 转换成 worksheet 需要的结构
          .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.v } }), {});
  
      // 合并 headers 和 data
      let output = Object.assign({}, headers, data);
      
      // 获取所有单元格的位置
      let outputPos = Object.keys(output);

      // 计算出范围
      let ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
  
      // 构建 workbook 对象
      let wb = {
          SheetNames: ['mySheet'],
          Sheets: {
              'mySheet': Object.assign({}, output, { '!ref': ref }),
          },
      };
      
      // 导出 Excel
      XLSX.writeFile(wb, `${fileName}.xlsx`);
    } else {
      return {
        code: 400,
        message: 'not data export'
      }
    }
  } catch (error) {
    console.error(error)
  }    
}
