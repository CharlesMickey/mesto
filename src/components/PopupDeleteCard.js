import Popup from './Popup.js'

export default class PopupDeleteCard extends Popup {
  constructor({
    popupSelector,
    api,
  }) {
    super(popupSelector)
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._api = api;
    this._setEventListeners()
  }


  _setEventListeners() {
    super.setEventListeners();
    const deleteHandler = (evt) => {
      evt.preventDefault();
      this._api
        .then((res) => {
          document.getElementById(res._id).remove();
        });

      this._popupContainer.removeEventListener('submit', deleteHandler);
      this.close();
    };
    this._popupContainer.addEventListener('submit', deleteHandler);

  }
}
