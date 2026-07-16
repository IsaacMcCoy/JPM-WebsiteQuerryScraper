//define how web tracker actually functions

import { ref } from 'vue'
import type { WebScraper } from "../types/webScraper.ts"

export const webScraperList = ref<WebScraper[]>([])