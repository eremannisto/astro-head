export type As = 
  | "audio" 
  | "document" 
  | "embed" 
  | "fetch" 
  | "font" 
  | "image" 
  | "object" 
  | "script" 
  | "style" 
  | "track" 
  | "video" 
  | "worker";

export interface Author {
  value?: string;
}

export interface Canonical {
  value?: string;
}

export type CrossOrigin = 
  | "anonymous" 
  | "use-credentials" 
  | "";

export interface Description {
  value?: string;
}

export interface Favicon extends Link {
  preset: "ico" | "png" | "svg" | "apple";
  size?: number;
}

export type FetchPriority = 
  | "high" 
  | "low" 
  | "auto";

export interface Follow {
  value: boolean;
}

export interface Head {
  title?       : Title["value"];
  template?    : Title["template"];
  description? : Description["value"];
  image?       : string;
  keywords?    : Keywords["value"];
  index?       : Index["value"];
  follow?      : Follow["value"];
  canonical?   : Canonical["value"];
  author?      : Author["value"];
  themeColor?  : ThemeColor["value"];
  favicons?    : Favicon[];
  openGraph?   : OpenGraph;
  twitter?     : Twitter;
}

export interface Index {
  value: boolean;
}

export interface Keywords {
  value?: string[];
}

export interface Link {
  rel             : string;
  href            : string;
  as?             : As;
  blocking?       : string;
  crossorigin?    : CrossOrigin;
  disabled?       : boolean;
  fetchpriority?  : FetchPriority;
  hreflang?       : string;
  imagesizes?     : string;
  imagesrcset?    : string;
  integrity?      : string;
  media?          : string;
  referrerpolicy? : ReferrerPolicy;
  sizes?          : string;
  title?          : string;
  type?           : string;
}

export interface Meta {
  charset?      : string;
  content?      : string;
  httpEquiv?    : string;
  media?        : string;
  name?         : string;
  property?     : string;
}

export interface OpenGraph {
  title?       : string;
  description? : string;
  image?       : string;
  url?         : string;
  type?        : string;
}

export interface Script {
  src?            : string;
  type?           : ScriptType;
  async?          : boolean;
  defer?          : boolean;
  crossorigin?    : CrossOrigin;
  integrity?      : string;
  attributionsrc? : string;
  blocking?       : string;
  fetchpriority?  : FetchPriority;
  nomodule?       : boolean;
  nonce?          : string;
  referrerpolicy? : ReferrerPolicy
}

export type ScriptType = 
  | "importmap"
  | "module" 
  | "speculationrules"
  | string;

export interface ThemeColor {
  value: string;
}

export interface Title {
  value     : string;
  template? : string;
}

export interface Twitter {
  title?       : string;
  description? : string;
  image?       : string;
  card?        : "summary" | "summary_large_image";
}
  