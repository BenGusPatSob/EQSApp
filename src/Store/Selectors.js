import { createSelector } from 'reselect';

export const getEntidades = state => state.Seccion.Entidades;
export const getPuntos = state => state.Seccion.Entidades.Puntos;
export const getSegmentos = state => state.Seccion.Entidades.Segmentos;
export const getPolilineas = state => state.Seccion.Entidades.Polilineas;
export const getHatches = state => state.Seccion.Entidades.Hatches;
export const getGroups = state => state.Seccion.Entidades.Groups;
 
export const getModo = state => state.VariablesModo.Modo;
export const getZoomTransform = state => state.VariablesModo.ZoomTransform;
export const getOrtho = state => state.VariablesModo.Ortho;
export const getOsnapOn = state => state.VariablesModo.OsnapOn;
export const getUcs = state => state.VariablesModo.UCS;
export const getTolGeom = state => state.VariablesModo.TolGeom;
export const getVectorDirFix = state => state.VariablesModo.VectorDirFix;

export const getMargin_dwgPad = state => state.VariablesModo.Margin_dwgPad; 
export const getMargin_dwgPad = state => state.VariablesModo.Margin_dwgPad; 
export const getMargin_dwgForm = state => state.VariablesModo.Margin_dwgForm;
export const getMargin_dwgForm = state => state.VariablesModo.Margin_dwgForm;
export const getPadding_dwgPad = state => state.VariablesModo.Padding_dwgPad;
export const getPadding_dwgPad = state => state.VariablesModo.Padding_dwgPad;
export const getPadding_dwgForm = state => state.VariablesModo.Padding_dwgForm;
export const getPadding_dwgForm = state => state.VariablesModo.Padding_dwgForm;

export const getUndo = state => state.Undo;
export const getCurrSel = state => state.CurrSelection;
export const getRefPoint = state => state.RefPoint

export const select = {
    getEntidades,              
    getPuntos,                
    getSegmentos,              
    getPolilineas,            
    getHatches,                
    getGroups,                
    getModo,                   
    getZoomTransform,          
    getOrtho,                  
    getOsnapOn,                
    getUcs,                    
    getTolGeom,                
    getVectorDirFix,          
    getMargin_dwgPad,           
    getMargin_dwgPad,           
    getMargin_dwgForm,         
    getMargin_dwgForm,         
    getPadding_dwgPad,         
    getPadding_dwgPad,         
    getPadding_dwgForm,       
    getPadding_dwgForm,        
    getUndo,                   
    getRefPoint,               
}