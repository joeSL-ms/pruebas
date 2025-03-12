export interface DataPointType {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

export interface DataPointProps {
    data: DataPointType[];
    height?: number; 
}

export interface DataPointTypeP {
    subject: string;
    A: number;
    B: number;
    fullMark: number;
}

export interface DataPointPropsP {
    data: DataPointTypeP[];
    height?: number; 
}

export interface DataPointTypeC {
    name: string;
    value: number;
}

export interface DataPointPropsC {
    data: DataPointTypeC[];
    height?: number; 
}