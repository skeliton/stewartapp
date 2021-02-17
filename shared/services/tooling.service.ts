import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolingService {

  constructor() {

  }

  data = {
    values:[
      {
        id: 1,
        type: "Angular",
        subType: "link",
        name: "Upgrade Angular",
        info: "Link to the upgrade angular app tool",
        linkRef: "https://update.angular.io/"
      }
    ]
  }


}
