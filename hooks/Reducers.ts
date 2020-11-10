import Actions from "./Actions";
import { IModalModel } from "../model/hooks.model";

const Reducers = (dispatch: any) => ({
  toggleModal: (modal: IModalModel) => {
    dispatch({ type: Actions.TOGGLE_MODAL, modal });
  },
});

export const stateInitialValue = {
  openModal: false,
  modalConfig: { type: "" },
};

export default Reducers;
