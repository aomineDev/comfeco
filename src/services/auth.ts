import firebase from 'firebase/client'

type UserCredential = firebase.auth.UserCredential

export const logInWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
}

export const RegisterWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
}

export const ResetPassword = async (email: string, config: any): Promise<any> => {
  return await firebase
    .auth()
    .sendPasswordResetEmail(email, config)
}
