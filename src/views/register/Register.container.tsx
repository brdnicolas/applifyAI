import { ButtonPrimary, ButtonSecondary, Input } from '@/components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const RegisterContainer = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div className="bg-gray-900 w-full h-full px-17 py-14">
      <div className="h-full">
        <header className="flex items-center justify-between">
          <img src="/assets/logo.svg" alt="Logo" />
          <ButtonSecondary>
            <Link to="/login">Se connecter</Link>
          </ButtonSecondary>
        </header>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-center text-10 font-bold w-[597px]">
              Gérez vos candidatures avec précision, boosté par l'IA
            </h1>
            <div className="mt-30 w-[300px]">
              <Input
                type="text"
                value={firstName}
                placeholder="Votre prénom"
                iconName="user"
                handleOnChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <Input
                className="mt-6"
                type="text"
                value={lastName}
                placeholder="Votre nom"
                iconName="user"
                handleOnChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
              <Input
                className="mt-6"
                type="text"
                value={mail}
                placeholder="email"
                iconName="mail"
                handleOnChange={(e) => {
                  setMail(e.target.value)
                }}
              />
              <Input
                className="mt-6"
                type="password"
                value={password}
                placeholder="password"
                iconName="lock"
                handleOnChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <ButtonPrimary isDisabled={!firstName || !lastName || !mail || !password} className="w-full mt-9">
                S'inscrire
              </ButtonPrimary>
              <p className="text-gray-300 text-3 flex justify-center mt-26">
                Vous avez déjà un compte ?{' '}
                <Link className="text-white font-bold cursor-pointer no-underline ml-1" to="/login">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
