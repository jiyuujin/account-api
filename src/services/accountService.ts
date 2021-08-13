import { SheetService } from './sheetService'

import { SPREADSHEET_API, SHEET_NAME } from '~/constants'

/**
 * 家計簿情報を取得する
 * @param rows 対象データ
 */
const getAccountData = (rows) => {
    const keys = rows.splice(0, 1)[0]
    return rows.map((row) => {
        const obj = {}
        row.map((item, index) => {
            obj[String(keys[index])] = String(item)
        })
        return obj
    })
}

export class AccountService {
    static doGet() {
        const ss = SheetService.getSpreadsheet(SPREADSHEET_API)
        const sheet = SheetService.getSheetByName(ss, SHEET_NAME)
        const rows = sheet.getDataRange().getValues()
        const data = getAccountData(rows)
        const out = ContentService.createTextOutput(
            JSON.stringify({ data: data }, null, 2)
        )
            .setMimeType(ContentService.MimeType.JSON)
        out.setContent(
            JSON.stringify({ data: data }, null, 2)
        ) // JSONPテキストをセット
        return out
    }
}
