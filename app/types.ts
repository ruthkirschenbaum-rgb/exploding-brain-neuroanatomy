export interface Ref {lecture:number;slide:number}
export interface Part {id:string;name:string;group:string;color:string;kind:string;refs:Ref[];referenceNote?:string;conceptId?:string;bounds:number[][];positions?:number;normals?:number;indices?:number;vertexCount?:number;indexCount?:number;segment?:number;region?:string}
export interface Atlas {parts:Part[];colors:Record<string,string>;meshCount:number}
export interface Slide {lecture:number;slide:number;text:string}
export interface SceneState {explode:number;selected:string;visible:string[];isolate:boolean;view:string;reset:number;rotate:boolean;labels:boolean;brainOnly:boolean;preset:string;plane:string;region:string;slice:number;natural:boolean;highlight:string[];highContrast:boolean;hideNames:boolean}
