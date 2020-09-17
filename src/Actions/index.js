import C from './Constants';

export const addPointDwgPad = punto => ({
    type: C.ADD_POINT,
    payload: { punto }
});

export const addSegmentDwgPad = segmento => ({
    type: C.ADD_SEGMENT,
    payload: { segmento }
});

export const addPolyline = pol => ({
    type: C.ADD_POLYLINE,
    payload: { pol }
});
