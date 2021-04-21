import { Component } from "@angular/core";
import { Configuration } from "../../../modules/action-hub/types/configuration";

@Component({
  selector: "app-action-hub-visual",
  templateUrl: "./action-hub-demo.component.html",
})
export class ActionHubDemoComponent {
  public needsAttention = [
    {
      title: "1 update",
      message: "from portal",
      permalink: {
        url: "#",
      },
    },
    {
      title: "2 new messages",
      message: "from online donation",
      permalink: {
        url: "#",
      },
    },
    {
      title: "3 possible duplicates",
      message: "from constituent lists",
      permalink: {
        url: "#",
      },
    },
    {
      title: "4 updates",
      message: "from portal",
      permalink: {
        url: "#",
      },
    },
    {
      title: "5 new messages",
      message: "from online donation",
      permalink: {
        url: "#",
      },
    },
    {
      title: "6 possible duplicates",
      message: "from constituent lists",
      permalink: {
        url: "#",
      },
    },
    {
      title: "7 update",
      message: "from portal",
      permalink: {
        url: "#",
      },
    },
    {
      title: "8 new messages",
      message: "from online donation",
      permalink: {
        url: "#",
      },
    },
    {
      title: "9 possible duplicates",
      message: "from constituent lists",
      permalink: {
        url: "#",
      },
    },
  ];

  public recentLinks = [
    {
      label: "Recent 1",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Recent 2",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Recent 3",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Recent 4",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Recent 5",
      permalink: {
        url: "#",
      },
    },
  ];

  public relatedLinks = [
    {
      label: "Link 1",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Link 2",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Link 3",
      permalink: {
        url: "#",
      },
    },
  ];

  public buttons = [
    {
      label: "Action 1",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Action 2",
      permalink: {
        url: "#",
      },
    },
    {
      label: "Action 3",
      permalink: {
        url: "#",
      },
    },
  ];

  public configuration: Configuration = {
    title: "Action Hub",
    needsAttention: this.needsAttention,
    recentLinks: this.recentLinks,
    relatedLinks: this.relatedLinks,
  };
}
