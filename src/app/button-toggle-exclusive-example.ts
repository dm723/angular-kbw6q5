import { Component } from "@angular/core";

/**
 * @title Exclusive selection
 */
@Component({
  selector: "button-toggle-exclusive-example",
  templateUrl: "button-toggle-exclusive-example.html",
  styleUrls: ["button-toggle-exclusive-example.css"]
})
export class ButtonToggleExclusiveExample {
  calculated_ucrs = [
    { code: "1", color: "#1f9000", enabled: true },
    { code: "2+", color: "#1f9000", enabled: true },
    { code: "2", color: "#1f9000", enabled: true },
    { code: "2-", color: "#55a01d" ,enabled: true },
    { code: "3+", color: "#55a01d" ,enabled: true },
    { code: "3", color: "#7bb035" ,enabled: true },
    { code: "3-", color: "#9ec14c" ,enabled: true },
    { code: "4+", color: "#bed164" ,enabled: true },
    { code: "4", color: "#dbca53" ,enabled: true },
    { code: "4-", color: "#eac54d" ,enabled: true },
    { code: "5+", color: "#efa823" ,enabled: true },
    { code: "5", color: "#f58600" ,enabled: true },
    { code: "5-", color: "#fb5d00" ,enabled: true },
    { code: "6+", color: "#fb5d00" ,enabled: true },
    { code: "6", color: "#ff0000" ,enabled: true },
    { code: "7", color: "#ff0000" ,enabled: true },
    { code: "8", color: "#ff0000" ,enabled: true }
  ];

  proposed_ucrs = [
    { code: "1", color: "#1f9000", enabled: false },
    { code: "2+", color: "#1f9000", enabled: false },
    { code: "2", color: "#1f9000", enabled: false },
    { code: "2-", color: "#55a01d" ,enabled: false },
    { code: "3+", color: "#55a01d" ,enabled: false },
    { code: "3", color: "#7bb035" ,enabled: false },
    { code: "3-", color: "#9ec14c" ,enabled: false },
    { code: "4+", color: "#bed164" ,enabled: false },
    { code: "4", color: "#dbca53" ,enabled: false },
    { code: "4-", color: "#eac54d" ,enabled: false },
    { code: "5+", color: "#efa823" ,enabled: false },
    { code: "5", color: "#f58600" ,enabled: false },
    { code: "5-", color: "#fb5d00" ,enabled: false },
    { code: "6+", color: "#fb5d00" ,enabled: false },
    { code: "6", color: "#ff0000" ,enabled: true },
    { code: "7", color: "#ff0000" ,enabled: true },
    { code: "8", color: "#ff0000" ,enabled: true }
  ];
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
