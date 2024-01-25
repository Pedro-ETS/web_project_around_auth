import React, { useState, useEffect } from "react";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import Login from "./Login.js";
import Register from "./Register.js";
import InfoTooltip from "./InfoTooltip.js";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import HeaderLogin from "./HeaderLogin.js";
import HeaderRegister from "./HeaderRegister.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [card, setCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);

  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleEditAvatarPopupOpenClick = () => setEditAvatarPopupOpen(true);
  const handleConfirmationPopupOpenClick = () => setConfirmationPopupOpen(true);
  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmationPopupOpen(false);
    setSelectedCard(null);
  };
  function handleUpdateUser(dataUser) {
    api
      .setUserInfo("users/me", dataUser)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((error) => {
        alert("Error al modificar los  datos del usuario:", error);
      });
  }
  useEffect(() => {
    api
      .getUser("users/me")
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        alert.error("Error al obtener datos del usuario:", error);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards("cards")
      .then((data) => {
        setCards(data);
        console.log(data);
      })
      .catch((error) => {
        alert("Error al obtener las tarjetas:", error);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(!isLiked, "cards/likes/", card._id)
      .then((newCard) => {
        setCards((state) =>
          state.map((cardData) =>
            cardData._id === card._id ? newCard : cardData
          )
        );
      })
      .catch((error) => {
        alert("Error no se pudo agregar el like o deslike", error);
      });
  }

  function handleUpdateAvatar(data) {
    api
      .modifyImgUser("users/me/avatar", data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        alert("Error al modificar los  datos del usuario:", error);
      });
  }
  function handleAddPlaceSubmit(formData) {
    api
      .setCard("cards", formData)
      .then((res) => {
        setCards((cards) => [res, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        alert("Error al agregar una nueva tarjeta:", error);
      });
  }
  function handleCardData(card) {
    setCard(card);
  }
  function handleCardDelete() {
    api.deleteCard("cards/", card._id).then((data) => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    });
  }
  function handleImgCardBig(link) {
    setSelectedCard(link);
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
         
          <Routes>
            <Route exact path="/" 
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                    <HeaderRegister/>
                  
                </ProtectedRoute>
              }
            />
          </Routes>
          
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
