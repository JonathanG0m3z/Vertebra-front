export interface EcoTabState {
    activeTab: string;
  }
  
  export enum EcoTabReducerActionType {
    SET_ACTIVE_TAB = "SET_ACTIVE_TAB",
    REMOVE_TABS = "REMOVE_TABS",
    ADD_TAB = "ADD_TAB",
  }
  
  export type EcoTabReducerAction =
    | { type: EcoTabReducerActionType.SET_ACTIVE_TAB; payload: string }
    | { type: EcoTabReducerActionType.REMOVE_TABS; payload:  number }
    | { type: EcoTabReducerActionType.ADD_TAB; payload: {
      title: String,
      key: number,
      content: any
    } };
  
  export const EcoTabReducer = (
    state: any,
    action: EcoTabReducerAction
  ): EcoTabState => {
    switch (action.type) {
      case EcoTabReducerActionType.SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
        case EcoTabReducerActionType.REMOVE_TABS:  
          const newState = state.filter((tab: any, index: number)=>index!==action.payload);    
          return newState;
        case EcoTabReducerActionType.ADD_TAB: 
        const payload = {...action.payload, key: `${state.length+2}`}
          const newTab: any= [...state, payload]; 
          return newTab;
      default:
        return state;
    }
  };
  