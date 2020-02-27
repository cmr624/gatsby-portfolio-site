export interface GameData  {
    meta : StandardProjectData;
    playURL : string;
    sections : [Section];
    links : [Link];
    images : [string];
}

export interface WebdevProjectData  {
    meta : StandardProjectData;
    sections : [Section];
    links : [Link];
    images : [string];
    skills? : [string];
}

export interface StandardProjectData  {
    name : string;
    blurb : string;
    slug : string;
    credits : string;
}

export interface Section  {
    title? : string;
    description : string;
    list? : [string];
}

export interface Link  {
    interface : string;
    description : string;
    link : string;
}