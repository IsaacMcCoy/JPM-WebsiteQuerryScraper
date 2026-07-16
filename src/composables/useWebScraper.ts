//display curent web data or create new website tracker

import { ref } from 'vue'
import type { WebScraper } from '../types/webScraper.ts'
import { webScraperList } from '../services/webScraperServices.ts'

export function useWebScraper() {
  const newWebScraper = ref<WebScraper>({
    url: '',
    credibility: null,
    updateFrequency: '',
    keyword: ''
  })
  
  function addNewWebScraper(addedWebScraper: WebScraper) {
    webScraperList.value.push(addedWebScraper)
  }

  return {
    webScraperList,
    newWebScraper,
    addNewWebScraper
  }
}