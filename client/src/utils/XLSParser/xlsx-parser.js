import _ from 'lodash'
import XLSX from 'xlsx'

export default (file) => {
  const workbook = typeof window === 'undefined' ? XLSX.readFile(file, { dateNF: 'm/d/yyyy h:mm' }) : XLSX.read(file, { type: 'binary', dateNF: 'm/d/yyyy h:mm' })
  const sheetNames = workbook.SheetNames
  if (sheetNames.length === 0) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ error: 'Must have at least one worksheet' })
  }
  const sheets = workbook.Sheets
  const json = XLSX.utils.sheet_to_json(sheets[sheetNames[0]], {
    header: 1,
    defVal: '',
    blankrows: false,
    raw: false
  })

  if (json.length === 0) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ error: 'Must have at least one worksheet' })
  }

  const transposedMatrix = _.unzip(json)
  const normalizedOutput = transposedMatrix
    .map(columnRows => ({
      name: _.first(columnRows),
      data: _.tail(columnRows)
    }))
    .filter(column => column.data.length === 0 || !column.data.every(data => data === undefined))

  return Promise.resolve({ worksheet: normalizedOutput })
}
