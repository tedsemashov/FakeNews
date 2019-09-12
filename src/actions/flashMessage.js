import { FLASH_MESSAGE } from "../constants";

export function setFlashMessage(data) {
  return {
    type: FLASH_MESSAGE,
    flashMessage: data
  };
}
