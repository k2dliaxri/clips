import { TabComponent } from './../tab/tab.component';
import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements AfterContentInit {

// @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>
@ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )

    if(!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false
    })

    tab.active = true

    // prevent default behavior for <a>
    return false
  }

}
