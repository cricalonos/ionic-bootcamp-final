import { Component } from '@angular/core';

import { PicturePage } from '../picture/picture';
import { ListPostsPage } from '../list-posts/list-posts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PicturePage;
  tab2Root = ListPostsPage;

  constructor() {
  }

}
