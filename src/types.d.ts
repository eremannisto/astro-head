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

export type CrossOrigin = 
  | "anonymous" 
  | "use-credentials" 
  | "";

export type FetchPriority = 
  | "high" 
  | "low" 
  | "auto";


export type ScriptType = 
  | "importmap"
  | "module" 
  | "speculationrules"
  | string;