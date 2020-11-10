export interface IModalConfig {
  type: string;
}

export interface IModalModel {
  openModal: boolean;
  modalConfig: IModalConfig;
}

export interface IStateModel {
  openModal: boolean;
  modalConfig: IModalConfig;
  
}

export interface IActionModel {
  toggleModal: (modal: IModalModel) => void;
  
}
