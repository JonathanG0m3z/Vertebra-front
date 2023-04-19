export interface EcoTabState {
    activeTab: string;
    dropdownOptions: string[];
  }
  
  export enum EcoTabReducerActionType {
    SET_ACTIVE_TAB = "SET_ACTIVE_TAB",
    SET_DROPDOWN_OPTIONS = "SET_DROPDOWN_OPTIONS",
  }
  
  export type EcoTabReducerAction =
    | { type: EcoTabReducerActionType.SET_ACTIVE_TAB; payload: string }
    | { type: EcoTabReducerActionType.SET_DROPDOWN_OPTIONS; payload: string[] };
  
  export const EcoTabReducer = (
    state: EcoTabState,
    action: EcoTabReducerAction
  ): EcoTabState => {
    switch (action.type) {
      case EcoTabReducerActionType.SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
      case EcoTabReducerActionType.SET_DROPDOWN_OPTIONS:
        return { ...state, dropdownOptions: action.payload };
      default:
        return state;
    }
  };
  
  export const initialEcoTabState: EcoTabState = {
    activeTab: "Home",
    dropdownOptions: ["Grupos", "Tiendas", "Cuentas"],
  };
  