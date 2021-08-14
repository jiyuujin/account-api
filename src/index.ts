import { SheetService } from './services/sheetService'
import { AccountService } from './services/accountService'

import { getDayFormat } from './utils'

declare let global: any

global.createNewSpreadsheet = (): void => {
    const title = `New File ${getDayFormat()}`
    SheetService.createNewFile(title)
}

// global.postDaily = (): void => {
//     TaskService.postDaily()
// }

global.doGet = (): any => {
    return AccountService.doGet()
}
