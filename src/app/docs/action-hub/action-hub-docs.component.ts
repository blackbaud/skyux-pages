import { Component } from "@angular/core";
import { NeedsAttention } from "../../public/modules/needs-attention/types/needs-attention";
import { SkyLink } from "../../public/modules/link-list/types/link";

@Component({
  selector: "app-action-hub-docs",
  templateUrl: "action-hub-docs.component.html",
})
export class ActionHubDocsComponent {
  public needsAttention: NeedsAttention[] = [
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
  ];
  public recentLinks: SkyLink[] = [
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
  ];
  public relatedLinks: SkyLink[] = [
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
}
