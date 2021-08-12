import { SheetService } from './sheetService'

import { SPREADSHEET_API } from '~/constants'

/**
 * 家計簿情報を取得する
 * @param sheetName スプレッドシート名
 */
const getAccountData = (sheetName) => {
    const ss = SheetService.getSpreadsheet(SPREADSHEET_API)
    const sheet = SheetService.getSheetByName(ss, sheetName)
    const rows = sheet.getDataRange().getValues()
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
        const data = getAccountData('main')
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
