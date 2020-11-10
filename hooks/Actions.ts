import { IModalModel } from "../model/hooks.model";

export default class Actions {
  static TOGGLE_MODAL = "[Actions] TOGGLE_MODAL";
}
export const actionInitialValue = {
  toggleModal: (modal: IModalModel) => {},
};
