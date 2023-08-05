import {types} from "./types";
//
// export function changeTitleAction() {
//   return {
//   type: "CHANGE_TITLE"
//   }
// }
// export function withParamsAction(title) {
//   return {
//     type: types.WITH_PARAMS,
//     payload: title
//   }
// }
// export function changeInputAction(value) {
//   return {
//     type: types.VALUE,
//     payload: value
//   }
// }
// export function addUserAction(name) {
//   return {
//     type: types.ADD_USER,
//     payload:name
//   }
// }
// export function deleteAction() {
//   return {
//     type: types.CHANGE_TITLE
//   }
// }
// export function addNumberAction(number) {
//   return {
//     type: types.ADD_NUMBER,
//     payload: number
//   }
// }
// export function clearAllAction() {
//   return {
//     type: types.CLEAR_ALL
//   }
// }

export function preloaderOn() {
  return {
    type: types.PRELOADER_ON
  }
}
export function preloaderOff() {
  return {
    type: types.PRELOADER_OFF
  }
}

export function alertShow (info) {
  return {
    type: types.ALERT_ON,
    payload: info
  }
}

function alertHidden() {
  return {
    type: types.ALERT_OFF
  }
}

export function addUserAction(user) {
  return async function (dispatch) {

    dispatch(preloaderOn())

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/users/', options)

    if (response.status === 201) {
      dispatch(preloaderOff())
      dispatch(alertShow({message: 'пользователь зарегистрирован', variant: 'danger'}))
    } else if (response.status === 404) {
      dispatch(preloaderOn())
      dispatch(alertHidden({message: 'ошибка', variant: 'danger'}))
    }

  }
}

export const userRequest = () => ({
  type: types.USER_REQUEST
})


