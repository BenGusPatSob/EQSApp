import mat from '../Model/Materiales';
import mod from '../../Modos';
import units from '../Model/Units';

const estadoInicial =    {
    Seccion: {
        Id: "Secc_0000000000",
        Tipo: "secc",
        Visible: true,
        Entidades: {
            Puntos: [],
            Segmentos: [],
            Polilineas: [],
            Hatches: [],
            Groups: []    
        },
        Materialbase: mat.AW_6082_T6,
        Targets: [],
        Zindex: 0,
    },
    VariablesModo: {
        Modo: mod.DIBUJAR,
        ZoomTransform: [0, 0, 1],
        RadEventPunto: 5,
        EspEventoSegmento: 5,
        Ortho: false,
        OsnapOn: false,
        UCS: [0, 0, 0],
        UCS_helper: {Nombre: "UserCoordinateSystem", Valor:"[transX, transY, rotacionZ]"},
        WCS: [0, 0, 0],
        WCS_helper: {Nombre: "UserCoordinateSystem", Valor:"[transX, transY, rotacionZ]"},
        Units: units.mm_kN_deg_C,
        Units_helper: {Nombre: "Units", Valor: "mm_N_deg || "},
        TolGeom: 0.001,
        VectorDirFix: [],
        Width_dwgPad: 200,
        Width_dwgForm: 200,
        Height_dwgPad: 200,
        Height_dwgForm: 500,
        Padding_dwgPad: [0, 0, 0, 0],
        Padding_dwgPad: [0, 0, 0, 0],
        Margin_dwgPad: [0, 0, 0, 0],
        Margin_dwgPad: [0, 0, 0, 0],
        Padding_dwgPad: [0, 0, 0, 0],
        Padding_dwgPad: [0, 0, 0, 0],
        Margin_dwgForm: [0, 0, 0, 0],
        Margin_dwgForm: [0, 0, 0, 0],
        Padding_dwgForm: [0, 0, 0, 0],
        Padding_dwgForm: [0, 0, 0, 0],
    },
    Undo: [],
    CurrSelection: [],
    RefPoint: [0, 0, 0]
}

export default estadoInicial;